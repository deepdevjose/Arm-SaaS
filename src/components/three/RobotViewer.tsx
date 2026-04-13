'use client';

import { Suspense, useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import {
  useGLTF,
  useAnimations,
  OrbitControls,
  Grid,
  AccumulativeShadows,
  RandomizedLight,
  BakeShadows,
  SpotLight,
  useDepthBuffer,
} from '@react-three/drei';
import { EffectComposer, Bloom, Vignette } from '@react-three/postprocessing';
import * as THREE from 'three';

/* ─── Scene setup ─── */
function SceneSetup() {
  const { scene, gl } = useThree();
  useEffect(() => {
    scene.background = new THREE.Color('#07091a');
    scene.fog = new THREE.FogExp2('#07091a', 0.06);
    gl.shadowMap.enabled = true;
    gl.shadowMap.type = THREE.PCFSoftShadowMap;
  }, [scene, gl]);
  return null;
}

/* ─── Scene lights ─── */
function SceneLights() {
  const depthBuffer = useDepthBuffer({ frames: 1 });
  return (
    <>
      <SpotLight depthBuffer={depthBuffer} position={[-3, 6, 2]} angle={0.35} penumbra={0.8} intensity={60} color="#818cf8" castShadow distance={15} />
      <SpotLight depthBuffer={depthBuffer} position={[4, 5, -1]} angle={0.4} penumbra={1} intensity={35} color="#fbbf24" castShadow={false} distance={12} />
      <SpotLight depthBuffer={depthBuffer} position={[0, 4, -5]} angle={0.5} penumbra={1} intensity={25} color="#3730a3" castShadow={false} distance={10} />
      <ambientLight intensity={0.15} />
    </>
  );
}

/* ─── Animated robot model ─── */
function RobotModel({ autoRotate }: { autoRotate: boolean }) {
  const groupRef = useRef<THREE.Group>(null!);
  const { scene, animations } = useGLTF('/models/siasunsr12a.glb');
  const { actions } = useAnimations(animations, groupRef);

  useEffect(() => {
    /* ── Shadows ── */
    scene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    /* ── Auto-fit: ground model at y=0 ── */
    const box = new THREE.Box3().setFromObject(scene);
    const h = box.max.y - box.min.y;
    scene.position.set(
      -(box.min.x + box.max.x) / 2,
      -box.min.y,
      -(box.min.z + box.max.z) / 2,
    );
    scene.scale.setScalar(1.8 / h);

    /* ── Play built-in animations if they exist ── */
    if (animations.length > 0) {
      const first = Object.values(actions)[0];
      if (first) first.reset().setLoop(THREE.LoopRepeat, Infinity).play();
    }
  }, [scene, animations, actions]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();

    if (animations.length === 0) {
      /*
       * The GLB has no kinematic chain — all segments are siblings.
       * We simulate a realistic "arm at idle" appearance:
       *  – constant slow Y rotation  (base swivel look)
       *  – gentle pitch oscillation  (±2° =  slight nod)
       *  – subtle roll breathe       (±1°)
       * Amplitudes are tiny so nothing looks broken.
       */
      if (autoRotate) {
        groupRef.current.rotation.y += 0.004;
      }
      groupRef.current.rotation.x = Math.sin(t * 0.22) * 0.032;
      groupRef.current.rotation.z = Math.sin(t * 0.17 + 1.3) * 0.018;
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload('/models/siasunsr12a.glb');

/* ─── Glowing base ring ─── */
function BaseGlow() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 0]} receiveShadow>
      <ringGeometry args={[0.55, 1.1, 64]} />
      <meshBasicMaterial color="#4F46E5" transparent opacity={0.18} side={THREE.DoubleSide} />
    </mesh>
  );
}

interface RobotViewerProps {
  autoRotate?: boolean;
  height?: string;
  cameraPosition?: [number, number, number];
}

export function RobotViewer({
  autoRotate = true,
  height = '520px',
  cameraPosition = [0, 1.8, 3.8],
}: RobotViewerProps) {
  return (
    <div style={{ height }} className="w-full">
      <Canvas
        shadows
        camera={{ position: cameraPosition, fov: 38, near: 0.1, far: 100 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: false, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
      >
        <SceneSetup />
        <SceneLights />

        <Suspense fallback={null}>
          <group position={[0, 0, 0]}>
            <RobotModel autoRotate={autoRotate} />
            <BaseGlow />
          </group>

          <AccumulativeShadows position={[0, 0, 0]} frames={80} alphaTest={0.85} scale={5} color="#1e1b4b" opacity={0.7}>
            <RandomizedLight amount={8} radius={4} ambient={0.5} position={[-2, 8, 3]} bias={0.001} />
          </AccumulativeShadows>

          <BakeShadows />

          <Grid
            renderOrder={-1}
            position={[0, 0, 0]}
            infiniteGrid
            cellSize={0.4}
            cellThickness={0.4}
            sectionSize={2}
            sectionThickness={1}
            sectionColor="#312e81"
            cellColor="#1e1b4b"
            fadeDistance={12}
            fadeStrength={2}
          />
        </Suspense>

        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={0.6} luminanceSmoothing={0.4} intensity={1.4} radius={0.6} />
          <Vignette eskil={false} offset={0.2} darkness={0.7} />
        </EffectComposer>

        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={2}
          maxDistance={8}
          minPolarAngle={Math.PI / 8}
          maxPolarAngle={Math.PI / 2.1}
          autoRotate={false}
          target={[0, 0.9, 0]}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}
