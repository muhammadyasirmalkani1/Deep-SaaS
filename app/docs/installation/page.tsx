import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Monitor, Globe, Apple } from "lucide-react"

export default function InstallationPage() {
  return (
    <div className="py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-6 purple-gradient-text">Installation Guide</h1>
        <p className="text-xl text-gray-300 mb-6">
          Get started with Reflect on all your devices. Follow our step-by-step installation guide for your platform.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">Choose Your Platform</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="feature-card text-center">
            <Monitor className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Desktop</h3>
            <p className="text-gray-300 text-sm mb-4">macOS, Windows, Linux</p>
            <Button asChild size="sm" className="w-full">
              <Link href="#desktop">Install Desktop</Link>
            </Button>
          </div>
          <div className="feature-card text-center">
            <Smartphone className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Mobile</h3>
            <p className="text-gray-300 text-sm mb-4">iOS, Android</p>
            <Button asChild size="sm" className="w-full">
              <Link href="#mobile">Install Mobile</Link>
            </Button>
          </div>
          <div className="feature-card text-center">
            <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Web App</h3>
            <p className="text-gray-300 text-sm mb-4">Any browser</p>
            <Button asChild size="sm" className="w-full">
              <Link href="#web">Use Web App</Link>
            </Button>
          </div>
          <div className="feature-card text-center">
            <Apple className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-lg font-bold mb-2">Browser Extension</h3>
            <p className="text-gray-300 text-sm mb-4">Chrome, Firefox, Safari</p>
            <Button asChild size="sm" className="w-full">
              <Link href="#extension">Install Extension</Link>
            </Button>
          </div>
        </div>
      </div>

      <div id="desktop" className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">Desktop Installation</h2>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">System Requirements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="feature-card">
              <h4 className="text-lg font-bold mb-2">macOS</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>macOS 10.15 or later</li>
                <li>4GB RAM minimum</li>
                <li>500MB free disk space</li>
                <li>Intel or Apple Silicon</li>
              </ul>
            </div>
            <div className="feature-card">
              <h4 className="text-lg font-bold mb-2">Windows</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>Windows 10 or later</li>
                <li>4GB RAM minimum</li>
                <li>500MB free disk space</li>
                <li>64-bit processor</li>
              </ul>
            </div>
            <div className="feature-card">
              <h4 className="text-lg font-bold mb-2">Linux</h4>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>Ubuntu 18.04+ or equivalent</li>
                <li>4GB RAM minimum</li>
                <li>500MB free disk space</li>
                <li>64-bit processor</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Installation Steps</h3>

          <div className="space-y-6">
            <div className="feature-card">
              <h4 className="text-lg font-bold mb-3">macOS Installation</h4>
              <ol className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="bg-purple-900/30 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    1
                  </span>
                  <span>Download Reflect.dmg from our website or Mac App Store</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-900/30 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    2
                  </span>
                  <span>Double-click the downloaded .dmg file</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-900/30 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    3
                  </span>
                  <span>Drag Reflect to your Applications folder</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-900/30 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    4
                  </span>
                  <span>Launch Reflect from Applications or Spotlight</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-900/30 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    5
                  </span>
                  <span>Sign in with your Reflect account or create a new one</span>
                </li>
              </ol>
            </div>

            <div className="feature-card">
              <h4 className="text-lg font-bold mb-3">Windows Installation</h4>
              <ol className="space-y-2 text-gray-300">
                <li className="flex items-start">
                  <span className="bg-purple-900/30 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    1
                  </span>
                  <span>Download Reflect-Setup.exe from our website or Microsoft Store</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-900/30 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    2
                  </span>
                  <span>Run the installer as Administrator</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-900/30 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    3
                  </span>
                  <span>Follow the installation wizard</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-900/30 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    4
                  </span>
                  <span>Launch Reflect from Start Menu or Desktop shortcut</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-purple-900/30 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                    5
                  </span>
                  <span>Sign in with your Reflect account or create a new one</span>
                </li>
              </ol>
            </div>

            <div className="feature-card">
              <h4 className="text-lg font-bold mb-3">Linux Installation</h4>
              <div className="bg-black/50 p-4 rounded border border-purple-500/20 mb-4">
                <code className="text-sm text-gray-300">
                  # Download and install via snap
                  <br />
                  sudo snap install reflect
                  <br />
                  <br /># Or download .deb package
                  <br />
                  wget https://releases.reflect.app/reflect_latest_amd64.deb
                  <br />
                  sudo dpkg -i reflect_latest_amd64.deb
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="mobile" className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">Mobile Installation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">iOS (iPhone & iPad)</h3>
            <div className="mb-4">
              <h4 className="text-lg font-bold mb-2">Requirements</h4>
              <ul className="space-y-1 text-gray-300 text-sm mb-4">
                <li>iOS 14.0 or later</li>
                <li>50MB free storage</li>
                <li>Internet connection for sync</li>
              </ul>
            </div>
            <ol className="space-y-2 text-gray-300 mb-4">
              <li className="flex items-start">
                <span className="bg-purple-900/30 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                  1
                </span>
                <span>Open the App Store</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-900/30 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                  2
                </span>
                <span>Search for "Reflect Notes"</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-900/30 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                  3
                </span>
                <span>Tap "Get" to download</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-900/30 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                  4
                </span>
                <span>Open the app and sign in</span>
              </li>
            </ol>
            <Button asChild className="w-full">
              <Link href="https://apps.apple.com/app/reflect-notes">Download from App Store</Link>
            </Button>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Android</h3>
            <div className="mb-4">
              <h4 className="text-lg font-bold mb-2">Requirements</h4>
              <ul className="space-y-1 text-gray-300 text-sm mb-4">
                <li>Android 8.0 or later</li>
                <li>50MB free storage</li>
                <li>Internet connection for sync</li>
              </ul>
            </div>
            <ol className="space-y-2 text-gray-300 mb-4">
              <li className="flex items-start">
                <span className="bg-purple-900/30 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                  1
                </span>
                <span>Open Google Play Store</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-900/30 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                  2
                </span>
                <span>Search for "Reflect Notes"</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-900/30 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                  3
                </span>
                <span>Tap "Install" to download</span>
              </li>
              <li className="flex items-start">
                <span className="bg-purple-900/30 text-purple-400 rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">
                  4
                </span>
                <span>Open the app and sign in</span>
              </li>
            </ol>
            <Button asChild className="w-full">
              <Link href="https://play.google.com/store/apps/details?id=com.reflect.notes">
                Download from Play Store
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div id="web" className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">Web App</h2>
        <div className="feature-card mb-6">
          <h3 className="text-xl font-bold mb-4">Access Reflect Anywhere</h3>
          <p className="text-gray-300 mb-4">
            Use Reflect directly in your browser without installing anything. Perfect for shared computers or quick
            access.
          </p>
          <div className="mb-4">
            <h4 className="text-lg font-bold mb-2">Supported Browsers</h4>
            <ul className="grid grid-cols-2 md:grid-cols-4 gap-2 text-gray-300 text-sm">
              <li>Chrome 90+</li>
              <li>Firefox 88+</li>
              <li>Safari 14+</li>
              <li>Edge 90+</li>
            </ul>
          </div>
          <Button asChild className="w-full md:w-auto">
            <Link href="https://reflect.app">Open Web App</Link>
          </Button>
        </div>
      </div>

      <div id="extension" className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">Browser Extension</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="feature-card text-center">
            <h3 className="text-lg font-bold mb-2">Chrome Extension</h3>
            <p className="text-gray-300 text-sm mb-4">Capture web pages and create notes instantly</p>
            <Button asChild size="sm">
              <Link href="https://chrome.google.com/webstore">Install Extension</Link>
            </Button>
          </div>
          <div className="feature-card text-center">
            <h3 className="text-lg font-bold mb-2">Firefox Add-on</h3>
            <p className="text-gray-300 text-sm mb-4">Quick capture and note creation</p>
            <Button asChild size="sm">
              <Link href="https://addons.mozilla.org">Install Add-on</Link>
            </Button>
          </div>
          <div className="feature-card text-center">
            <h3 className="text-lg font-bold mb-2">Safari Extension</h3>
            <p className="text-gray-300 text-sm mb-4">Native macOS integration</p>
            <Button asChild size="sm">
              <Link href="https://apps.apple.com">Install Extension</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">Troubleshooting</h2>
        <div className="space-y-6">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-2">Common Installation Issues</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold text-gray-200 mb-1">
                  macOS: "App can't be opened because it's from an unidentified developer"
                </h4>
                <p className="text-gray-300 text-sm">
                  Right-click the app and select "Open", then click "Open" in the dialog.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-gray-200 mb-1">Windows: "Windows protected your PC"</h4>
                <p className="text-gray-300 text-sm">Click "More info" then "Run anyway" to install the app.</p>
              </div>
              <div>
                <h4 className="font-bold text-gray-200 mb-1">Mobile: "Not enough storage"</h4>
                <p className="text-gray-300 text-sm">Free up at least 100MB of space and try again.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-purple-900/20">
        <Button asChild variant="outline" className="border-purple-500/30 hover:bg-purple-500/10">
          <Link href="/docs">Back to Documentation</Link>
        </Button>
        <Button asChild variant="outline" className="border-purple-500/30 hover:bg-purple-500/10">
          <Link href="/docs/core-concepts">
            Core Concepts <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
