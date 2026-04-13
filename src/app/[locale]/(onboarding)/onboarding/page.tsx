import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

export default function OnboardingPage() {
  return (
    <div>
      <div className="text-sm uppercase tracking-[0.28em] text-teal-300">Technical onboarding</div>
      <h1 className="mt-3 text-3xl font-semibold text-white">Configure your ARM environment</h1>
      <p className="mt-2 text-sm text-slate-400">Enter the minimum operational details required to initialize the tenant.</p>

      <div className="mt-8 grid gap-4">
        <Select>
          <option>Infrastructure type</option>
          <option>Edge cluster</option>
          <option>Compute cluster</option>
          <option>AI inference cluster</option>
        </Select>
        <Input placeholder="Number of nodes" />
        <Select>
          <option>Region</option>
          <option>eu-west-1</option>
          <option>us-east-1</option>
          <option>ap-southeast-1</option>
        </Select>
        <Select>
          <option>Workload type</option>
          <option>AI</option>
          <option>Compute</option>
          <option>Edge</option>
        </Select>
        <Button className="w-full">Create workspace</Button>
      </div>
    </div>
  );
}