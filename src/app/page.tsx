import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 sm:py-24">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <Badge variant="secondary" className="px-4 py-2 bg-secondary/50 border-primary/30">
            <Sparkles className="w-4 h-4 mr-2" />
            Powered by Sentry.New
          </Badge>

          {/* Heading */}
          <h1 className="text-5xl sm:text-7xl font-black tracking-tight">
            Next.js 15{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Template
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
            A production-ready Next.js 15 template with Sentry monitoring, shadcn/ui components, and modern best practices.
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
          <Card className="border-2 border-primary/30 bg-card/50 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Shield className="w-6 h-6 text-primary" />
                Sentry Integration
              </CardTitle>
              <CardDescription className="text-base">
                Add error tracking and performance monitoring in seconds
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-3 font-medium">Install Sentry SDK:</p>
                  <pre className="bg-secondary/30 border border-primary/20 p-4 rounded-lg overflow-x-auto">
                    <code className="text-sm font-mono text-primary">npx @sentry/wizard@latest -i nextjs</code>
                  </pre>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-3 font-medium">Initialize in your app:</p>
                  <pre className="bg-secondary/30 border border-primary/20 p-5 rounded-lg overflow-x-auto">
                    <code className="text-sm font-mono text-foreground leading-relaxed">{`import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for tracing.
  tracesSampleRate: 1.0,

  // Set profilesSampleRate to profile 10%
  // of sampled transactions.
  profilesSampleRate: 0.1,

  // Capture Replay for 10% of all sessions,
  // plus for 100% of sessions with an error
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});`}</code>
                  </pre>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <Button variant="link" className="px-0 text-primary hover:text-primary/80" asChild>
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
