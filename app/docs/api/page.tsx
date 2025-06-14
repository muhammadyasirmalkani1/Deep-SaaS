import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Code, Key, Zap, Shield, Globe, Webhook } from "lucide-react"

export default function APIPage() {
  const endpoints = [
    {
      method: "GET",
      path: "/api/v1/notes",
      description: "Retrieve all notes",
      auth: "Required",
      params: ["limit", "offset", "search", "tags"],
    },
    {
      method: "POST",
      path: "/api/v1/notes",
      description: "Create a new note",
      auth: "Required",
      params: ["title", "content", "tags", "connections"],
    },
    {
      method: "GET",
      path: "/api/v1/notes/:id",
      description: "Retrieve a specific note",
      auth: "Required",
      params: ["include_connections", "include_backlinks"],
    },
    {
      method: "PUT",
      path: "/api/v1/notes/:id",
      description: "Update an existing note",
      auth: "Required",
      params: ["title", "content", "tags", "connections"],
    },
    {
      method: "DELETE",
      path: "/api/v1/notes/:id",
      description: "Delete a note",
      auth: "Required",
      params: [],
    },
  ]

  const webhookEvents = [
    {
      event: "note.created",
      description: "Triggered when a new note is created",
      payload: "Note object with full content",
    },
    {
      event: "note.updated",
      description: "Triggered when a note is modified",
      payload: "Updated note object with changes",
    },
    {
      event: "note.deleted",
      description: "Triggered when a note is deleted",
      payload: "Note ID and metadata",
    },
    {
      event: "connection.created",
      description: "Triggered when notes are connected",
      payload: "Connection object with source and target",
    },
    {
      event: "tag.created",
      description: "Triggered when a new tag is created",
      payload: "Tag object with metadata",
    },
  ]

  const getMethodColor = (method: string) => {
    switch (method) {
      case "GET":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "POST":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "PUT":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
      case "DELETE":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Code className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold">API Documentation</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Build powerful integrations with the Reflect API. Access notes, connections, and more programmatically.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Globe className="h-5 w-5" />
              REST API
            </CardTitle>
            <CardDescription className="text-sm">Full HTTP API with JSON responses</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Webhook className="h-5 w-5" />
              Webhooks
            </CardTitle>
            <CardDescription className="text-sm">Real-time event notifications</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Secure
            </CardTitle>
            <CardDescription className="text-sm">API key authentication & HTTPS</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Rate Limited
            </CardTitle>
            <CardDescription className="text-sm">1000 requests/hour per API key</CardDescription>
          </CardHeader>
        </Card>
      </div>

      <Tabs defaultValue="getting-started" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
          <TabsTrigger value="endpoints">Endpoints</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
          <TabsTrigger value="examples">Examples</TabsTrigger>
          <TabsTrigger value="sdks">SDKs</TabsTrigger>
        </TabsList>

        <TabsContent value="getting-started" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Key className="h-5 w-5" />
                Authentication
              </CardTitle>
              <CardDescription>Get your API key and start making requests</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Get Your API Key</h4>
                <p className="text-sm text-muted-foreground mb-3">Generate an API key from your account settings.</p>
                <Button size="sm">Generate API Key</Button>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">2. Make Your First Request</h4>
                <p className="text-sm text-muted-foreground mb-3">Include your API key in the Authorization header:</p>
                <div className="bg-muted rounded-lg p-4">
                  <code className="text-sm">
                    {`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     -H "Content-Type: application/json" \\
     https://api.reflect.app/v1/notes`}
                  </code>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-semibold mb-2">3. Handle Responses</h4>
                <p className="text-sm text-muted-foreground mb-3">All responses are in JSON format:</p>
                <div className="bg-muted rounded-lg p-4">
                  <code className="text-sm">
                    {`{
  "data": [...],
  "meta": {
    "total": 42,
    "page": 1,
    "per_page": 20
  }
}`}
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Base URL & Versioning</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-sm font-medium">Base URL</p>
                <code className="text-sm bg-muted px-2 py-1 rounded">https://api.reflect.app</code>
              </div>
              <div>
                <p className="text-sm font-medium">Current Version</p>
                <code className="text-sm bg-muted px-2 py-1 rounded">v1</code>
              </div>
              <div>
                <p className="text-sm font-medium">Content Type</p>
                <code className="text-sm bg-muted px-2 py-1 rounded">application/json</code>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="endpoints" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Notes API</CardTitle>
              <CardDescription>Create, read, update, and delete notes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {endpoints.map((endpoint, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <Badge className={getMethodColor(endpoint.method)}>{endpoint.method}</Badge>
                        <code className="text-sm font-mono">{endpoint.path}</code>
                      </div>
                      <Badge variant="outline">{endpoint.auth}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{endpoint.description}</p>
                    {endpoint.params.length > 0 && (
                      <div>
                        <p className="text-sm font-medium mb-1">Parameters:</p>
                        <div className="flex flex-wrap gap-1">
                          {endpoint.params.map((param, paramIndex) => (
                            <code key={paramIndex} className="text-xs bg-muted px-2 py-1 rounded">
                              {param}
                            </code>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Additional Endpoints</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Tags</h4>
                  <ul className="text-sm space-y-1">
                    <li>
                      <code>GET /api/v1/tags</code>
                    </li>
                    <li>
                      <code>POST /api/v1/tags</code>
                    </li>
                    <li>
                      <code>DELETE /api/v1/tags/:id</code>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Connections</h4>
                  <ul className="text-sm space-y-1">
                    <li>
                      <code>GET /api/v1/connections</code>
                    </li>
                    <li>
                      <code>POST /api/v1/connections</code>
                    </li>
                    <li>
                      <code>DELETE /api/v1/connections/:id</code>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Search</h4>
                  <ul className="text-sm space-y-1">
                    <li>
                      <code>GET /api/v1/search</code>
                    </li>
                    <li>
                      <code>POST /api/v1/search/advanced</code>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">User</h4>
                  <ul className="text-sm space-y-1">
                    <li>
                      <code>GET /api/v1/user</code>
                    </li>
                    <li>
                      <code>PUT /api/v1/user</code>
                    </li>
                    <li>
                      <code>GET /api/v1/user/stats</code>
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="webhooks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Webhook Events</CardTitle>
              <CardDescription>Subscribe to real-time events from your Reflect account</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {webhookEvents.map((webhook, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <code className="text-sm font-mono bg-muted px-2 py-1 rounded">{webhook.event}</code>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{webhook.description}</p>
                    <p className="text-xs text-muted-foreground">
                      <strong>Payload:</strong> {webhook.payload}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Setting Up Webhooks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">1. Create Webhook Endpoint</h4>
                <div className="bg-muted rounded-lg p-4">
                  <code className="text-sm">
                    {`POST /api/v1/webhooks
{
  "url": "https://your-app.com/webhook",
  "events": ["note.created", "note.updated"],
  "secret": "your-webhook-secret"
}`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">2. Verify Webhook Signature</h4>
                <div className="bg-muted rounded-lg p-4">
                  <code className="text-sm">
                    {`const crypto = require('crypto');

function verifyWebhook(payload, signature, secret) {
  const hmac = crypto.createHmac('sha256', secret);
  const digest = hmac.update(payload).digest('hex');
  return signature === \`sha256=\${digest}\`;
}`}
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="examples" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Code Examples</CardTitle>
              <CardDescription>Common API usage patterns and examples</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Create a Note</h4>
                <div className="bg-muted rounded-lg p-4">
                  <code className="text-sm">
                    {`const response = await fetch('https://api.reflect.app/v1/notes', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'My New Note',
    content: 'This is the content of my note.',
    tags: ['important', 'project-alpha']
  })
});

const note = await response.json();`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Search Notes</h4>
                <div className="bg-muted rounded-lg p-4">
                  <code className="text-sm">
                    {`const response = await fetch(
  'https://api.reflect.app/v1/notes?search=project&tags=important',
  {
    headers: {
      'Authorization': 'Bearer YOUR_API_KEY'
    }
  }
);

const { data: notes } = await response.json();`}
                  </code>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Create Connection</h4>
                <div className="bg-muted rounded-lg p-4">
                  <code className="text-sm">
                    {`const response = await fetch('https://api.reflect.app/v1/connections', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    source_note_id: 'note-123',
    target_note_id: 'note-456',
    connection_type: 'relates_to'
  })
});`}
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sdks" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Official SDKs</CardTitle>
              <CardDescription>Use our official SDKs for faster development</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">JavaScript/Node.js</h4>
                  <div className="bg-muted rounded-lg p-3 mb-3">
                    <code className="text-sm">npm install @reflect/api</code>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <code className="text-sm">
                      {`import { ReflectAPI } from '@reflect/api';

const reflect = new ReflectAPI('YOUR_API_KEY');
const notes = await reflect.notes.list();`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Python</h4>
                  <div className="bg-muted rounded-lg p-3 mb-3">
                    <code className="text-sm">pip install reflect-api</code>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <code className="text-sm">
                      {`from reflect import ReflectAPI

reflect = ReflectAPI('YOUR_API_KEY')
notes = reflect.notes.list()`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Go</h4>
                  <div className="bg-muted rounded-lg p-3 mb-3">
                    <code className="text-sm">go get github.com/reflect/go-sdk</code>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <code className="text-sm">
                      {`import "github.com/reflect/go-sdk"

client := reflect.NewClient("YOUR_API_KEY")
notes, err := client.Notes.List()`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Ruby</h4>
                  <div className="bg-muted rounded-lg p-3 mb-3">
                    <code className="text-sm">gem install reflect-api</code>
                  </div>
                  <div className="bg-muted rounded-lg p-3">
                    <code className="text-sm">
                      {`require 'reflect'

client = Reflect::Client.new('YOUR_API_KEY')
notes = client.notes.list`}
                    </code>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community SDKs</CardTitle>
              <CardDescription>Third-party SDKs maintained by the community</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">PHP</h4>
                  <p className="text-sm text-muted-foreground mb-2">Community maintained</p>
                  <Button size="sm" variant="outline">
                    View on GitHub
                  </Button>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">C#</h4>
                  <p className="text-sm text-muted-foreground mb-2">Community maintained</p>
                  <Button size="sm" variant="outline">
                    View on GitHub
                  </Button>
                </div>
                <div className="text-center p-4 border rounded-lg">
                  <h4 className="font-semibold mb-2">Swift</h4>
                  <p className="text-sm text-muted-foreground mb-2">Community maintained</p>
                  <Button size="sm" variant="outline">
                    View on GitHub
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Rate Limits & Best Practices</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Rate Limits</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• 1,000 requests per hour per API key</li>
                  <li>• 10 requests per second burst limit</li>
                  <li>• Rate limit headers included in responses</li>
                  <li>• 429 status code when limit exceeded</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Best Practices</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Cache responses when possible</li>
                  <li>• Use webhooks for real-time updates</li>
                  <li>• Implement exponential backoff for retries</li>
                  <li>• Batch operations when available</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">API Support</h3>
          <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
            Need help with the API? Join our developer community or contact our support team.
          </p>
          <div className="flex gap-2">
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Join Discord
            </Button>
            <Button size="sm" variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-100">
              Contact Support
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
