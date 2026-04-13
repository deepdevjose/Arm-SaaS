import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export default function LoginPage() {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-90px)] max-w-xl items-center px-6 py-12">
      <Card className="w-full p-8">
        <div className="text-sm uppercase tracking-[0.28em] text-teal-300">Enterprise Access</div>
        <h1 className="mt-3 text-3xl font-semibold text-white">Sign in to ARM Health</h1>
        <p className="mt-2 text-sm text-slate-400">Use email/password or enterprise SSO.</p>
        <form className="mt-8 space-y-4">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button className="w-full">Login</Button>
          <Button variant="secondary" className="w-full">
            Continue with SSO
          </Button>
        </form>
      </Card>
    </div>
  );
}