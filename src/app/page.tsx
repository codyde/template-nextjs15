import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent/5">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 sm:py-24">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="px-4 py-2">
            <Sparkles className="w-4 h-4 mr-2" />
            Powered by Sentry.New
          </Badge>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
            Build Production-Ready Apps{" "}
            <span className="text-primary">Faster</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
            A Next.js 15 template with Sentry branding, shadcn/ui components, and everything you need to ship your next project.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="group">
              Get Started
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline">
              View on GitHub
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 max-w-6xl mx-auto">
          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <Zap className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Lightning Fast</CardTitle>
              <CardDescription>
                Built on Next.js 15 with optimized performance and modern best practices
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <Shield className="w-10 h-10 text-accent mb-2" />
              <CardTitle>Production Ready</CardTitle>
              <CardDescription>
                Includes TypeScript, shadcn/ui, and Sentry monitoring out of the box
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <Sparkles className="w-10 h-10 text-primary mb-2" />
              <CardTitle>Beautiful Design</CardTitle>
              <CardDescription>
                Themed with Sentry colors and 10+ pre-installed UI components
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Sentry Integration Code Snippet */}
        <div className="mt-24 max-w-4xl mx-auto">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-accent" />
                Sentry Integration Ready
              </CardTitle>
              <CardDescription>
                Add Sentry monitoring in seconds with this simple setup
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">1. Install Sentry SDK:</p>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm font-mono">npx @sentry/wizard@latest -i nextjs</code>
                  </pre>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">2. Configure your DSN:</p>
                  <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm font-mono">{`import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
  tracesSampleRate: 1.0,
  debug: false,
});`}</code>
                  </pre>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <Button variant="link" className="px-0" asChild>
                    <a
                      href="https://docs.sentry.io/platforms/javascript/guides/nextjs/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View full documentation
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Included Components */}
        <div className="mt-24 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Included Components</h2>
          <p className="text-muted-foreground mb-8">
            10+ shadcn/ui components pre-installed and ready to use
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {["Button", "Card", "Input", "Label", "Select", "Dialog", "Dropdown Menu", "Badge", "Avatar", "Sonner"].map((comp) => (
              <Badge key={comp} variant="outline" className="px-3 py-1">
                {comp}
              </Badge>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-24">
        <div className="container mx-auto px-4 py-8 text-center text-sm text-muted-foreground">
          <p>
            Built for{" "}
            <a
              href="https://sentry.new"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-medium"
            >
              Sentry.New
            </a>
            {" "}app builder
          </p>
        </div>
      </footer>
    </div>
  );
}
