import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, ArrowLeft, Search, Filter, Zap, Target, Clock, Hash } from "lucide-react"

export default function SearchPage() {
  return (
    <div className="py-8">
      <div className="mb-8">
        <Link href="/docs/features" className="text-purple-400 hover:text-purple-300 flex items-center mb-2">
          <ArrowLeft className="mr-1 h-4 w-4" /> Back to Features
        </Link>
        <h1 className="text-4xl font-bold mb-6 purple-gradient-text">Search & Discovery</h1>
        <p className="text-xl text-gray-300 mb-6">
          Find exactly what you're looking for with Reflect's powerful search capabilities and intelligent discovery
          features.
        </p>
      </div>

      <div className="mb-12">
        <div className="relative purple-glow rounded-xl overflow-hidden border border-purple-500/20 mb-8">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-600/10 to-transparent"></div>
          <Image
            src="/placeholder.svg?height=400&width=800"
            alt="Search Interface"
            width={800}
            height={400}
            className="w-full h-auto"
          />
        </div>

        <h2 className="text-2xl font-bold mb-4 purple-gradient-text">Search Like You Think</h2>
        <p className="text-gray-300 mb-6">
          Reflect's search goes beyond simple keyword matching. It understands context, relationships, and the meaning
          behind your queries to surface the most relevant results.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="feature-card">
            <Search className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Semantic Search</h3>
            <p className="text-gray-300">
              Find notes based on meaning, not just exact word matches. Search for concepts and get relevant results
              even with different terminology.
            </p>
          </div>
          <div className="feature-card">
            <Zap className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Instant Results</h3>
            <p className="text-gray-300">
              Get search results as you type with real-time indexing and lightning-fast query processing.
            </p>
          </div>
          <div className="feature-card">
            <Target className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Context-Aware</h3>
            <p className="text-gray-300">
              Search results consider your current note, recent activity, and connection patterns to prioritize the most
              relevant matches.
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">Search Types</h2>

        <div className="space-y-8">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Quick Search</h3>
            <p className="text-gray-300 mb-4">
              The fastest way to find notes. Access with{" "}
              <kbd className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">Ctrl+K</kbd> or click
              the search icon.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-gray-200 mb-2">Basic Queries</h4>
                <div className="bg-black/50 p-4 rounded border border-purple-500/20">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <code className="text-purple-300 mr-3">machine learning</code>
                      <span className="text-gray-300">Find notes containing these words</span>
                    </div>
                    <div className="flex items-center">
                      <code className="text-purple-300 mr-3">"exact phrase"</code>
                      <span className="text-gray-300">Search for exact phrase</span>
                    </div>
                    <div className="flex items-center">
                      <code className="text-purple-300 mr-3">AI OR ML</code>
                      <span className="text-gray-300">Find notes with either term</span>
                    </div>
                    <div className="flex items-center">
                      <code className="text-purple-300 mr-3">python -javascript</code>
                      <span className="text-gray-300">Include python, exclude javascript</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-200 mb-2">Smart Suggestions</h4>
                <div className="bg-black/50 p-4 rounded border border-purple-500/20">
                  <div className="space-y-2 text-sm text-gray-300">
                    <div>• Auto-complete as you type</div>
                    <div>• Recent searches</div>
                    <div>• Popular queries</div>
                    <div>• Related terms</div>
                    <div>• Typo correction</div>
                    <div>• Synonym suggestions</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-card bg-blue-900/10 border-blue-500/20">
              <h4 className="text-lg font-bold mb-2">Pro Tip: Natural Language Queries</h4>
              <p className="text-gray-300 mb-3">
                Try searching with natural language questions like "What did I learn about React hooks?" or "Notes from
                last week's meeting"
              </p>
              <div className="bg-black/50 p-3 rounded border border-purple-500/20">
                <code className="text-sm text-gray-300">
                  "What are the benefits of meditation?"
                  <br />
                  "Show me notes about project planning"
                  <br />
                  "Find my thoughts on remote work"
                </code>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Advanced Search</h3>
            <p className="text-gray-300 mb-4">
              Use search operators and filters for precise control over your queries.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-purple-900/20">
                    <th className="py-3 px-4 text-left text-sm font-semibold text-white">Operator</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-white">Description</th>
                    <th className="py-3 px-4 text-left text-sm font-semibold text-white">Example</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-purple-900/20">
                    <td className="py-3 px-4">
                      <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">title:</code>
                    </td>
                    <td className="py-3 px-4 text-gray-300">Search in note titles only</td>
                    <td className="py-3 px-4">
                      <code className="text-xs text-gray-300">title:meeting</code>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-900/20">
                    <td className="py-3 px-4">
                      <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">tag:</code>
                    </td>
                    <td className="py-3 px-4 text-gray-300">Search by specific tag</td>
                    <td className="py-3 px-4">
                      <code className="text-xs text-gray-300">tag:productivity</code>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-900/20">
                    <td className="py-3 px-4">
                      <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">
                        created:
                      </code>
                    </td>
                    <td className="py-3 px-4 text-gray-300">Filter by creation date</td>
                    <td className="py-3 px-4">
                      <code className="text-xs text-gray-300">created:2023-12</code>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-900/20">
                    <td className="py-3 px-4">
                      <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">
                        modified:
                      </code>
                    </td>
                    <td className="py-3 px-4 text-gray-300">Filter by modification date</td>
                    <td className="py-3 px-4">
                      <code className="text-xs text-gray-300">modified:today</code>
                    </td>
                  </tr>
                  <tr className="border-b border-purple-900/20">
                    <td className="py-3 px-4">
                      <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">linked:</code>
                    </td>
                    <td className="py-3 px-4 text-gray-300">Find notes linked to specific note</td>
                    <td className="py-3 px-4">
                      <code className="text-xs text-gray-300">linked:"Project Alpha"</code>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">
                      <code className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">has:</code>
                    </td>
                    <td className="py-3 px-4 text-gray-300">Filter by content type</td>
                    <td className="py-3 px-4">
                      <code className="text-xs text-gray-300">has:image</code>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="bg-black/50 p-4 rounded border border-purple-500/20">
              <h4 className="font-bold text-purple-300 mb-2">Complex Query Examples</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <code className="text-purple-300">tag:work AND created:this-week</code>
                  <span className="text-gray-300 ml-2">Work notes from this week</span>
                </div>
                <div>
                  <code className="text-purple-300">title:meeting OR tag:meeting</code>
                  <span className="text-gray-300 ml-2">Notes with "meeting" in title or tagged as meeting</span>
                </div>
                <div>
                  <code className="text-purple-300">has:image AND tag:research</code>
                  <span className="text-gray-300 ml-2">Research notes containing images</span>
                </div>
                <div>
                  <code className="text-purple-300">linked:"Machine Learning" AND modified:last-month</code>
                  <span className="text-gray-300 ml-2">Notes linked to ML, modified last month</span>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Visual Search</h3>
            <p className="text-gray-300 mb-4">Search and explore your notes visually through the graph interface.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-200 mb-2">Graph Search Features</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                      <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Highlight search results in graph</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                      <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Filter graph by search criteria</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                      <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Explore connections visually</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                      <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Zoom to search results</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-purple-900/30 flex items-center justify-center mr-3 mt-1">
                      <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Path finding between notes</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-200 mb-2">Discovery Patterns</h4>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>• Cluster analysis</li>
                  <li>• Orphaned note detection</li>
                  <li>• Hub identification</li>
                  <li>• Bridge note discovery</li>
                  <li>• Temporal patterns</li>
                  <li>• Connection strength analysis</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">Smart Filters</h2>
        <p className="text-gray-300 mb-6">Narrow down your search results with intelligent filtering options.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="feature-card">
            <Clock className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Time-based Filters</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Today, Yesterday, This Week</li>
              <li>• Last 7, 30, 90 days</li>
              <li>• Custom date ranges</li>
              <li>• Created vs Modified dates</li>
              <li>• Relative time expressions</li>
            </ul>
          </div>

          <div className="feature-card">
            <Hash className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Content Filters</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• By tags and categories</li>
              <li>• Content type (text, image, file)</li>
              <li>• Note length and word count</li>
              <li>• Connection density</li>
              <li>• Completion status</li>
            </ul>
          </div>

          <div className="feature-card">
            <Filter className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Relationship Filters</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Linked to specific notes</li>
              <li>• Orphaned notes</li>
              <li>• Highly connected hubs</li>
              <li>• Recently linked</li>
              <li>• Backlink count</li>
            </ul>
          </div>
        </div>

        <div className="feature-card">
          <h3 className="text-xl font-bold mb-4">Saved Searches</h3>
          <p className="text-gray-300 mb-4">Save frequently used search queries and filters for quick access.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-gray-200 mb-2">Common Saved Searches</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between p-2 bg-black/50 rounded border border-purple-500/20">
                  <span className="text-gray-300">📝 Today's Notes</span>
                  <code className="text-xs text-purple-300">created:today</code>
                </div>
                <div className="flex items-center justify-between p-2 bg-black/50 rounded border border-purple-500/20">
                  <span className="text-gray-300">🔗 Orphaned Notes</span>
                  <code className="text-xs text-purple-300">linked:none</code>
                </div>
                <div className="flex items-center justify-between p-2 bg-black/50 rounded border border-purple-500/20">
                  <span className="text-gray-300">📋 Meeting Notes</span>
                  <code className="text-xs text-purple-300">tag:meeting</code>
                </div>
                <div className="flex items-center justify-between p-2 bg-black/50 rounded border border-purple-500/20">
                  <span className="text-gray-300">🎯 Action Items</span>
                  <code className="text-xs text-purple-300">has:task</code>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-gray-200 mb-2">Smart Collections</h4>
              <p className="text-gray-300 text-sm mb-3">
                Dynamic collections that update automatically based on your search criteria.
              </p>
              <ul className="space-y-1 text-gray-300 text-sm">
                <li>• Auto-updating based on filters</li>
                <li>• Pin to sidebar for quick access</li>
                <li>• Share collections with team</li>
                <li>• Export search results</li>
                <li>• Set up notifications for new matches</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">AI-Powered Discovery</h2>
        <p className="text-gray-300 mb-6">
          Let AI help you discover relevant content and hidden connections in your knowledge base.
        </p>

        <div className="space-y-8">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Semantic Search</h3>
            <p className="text-gray-300 mb-4">
              Search by meaning and concept rather than exact keywords. AI understands context and intent.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-gray-200 mb-2">Traditional Keyword Search</h4>
                <div className="bg-red-900/20 p-4 rounded border border-red-500/20">
                  <div className="mb-2">
                    <strong className="text-red-300">Query:</strong> <code className="text-sm">"machine learning"</code>
                  </div>
                  <div>
                    <strong className="text-red-300">Results:</strong>
                    <div className="text-gray-300 text-sm mt-1">
                      Only notes containing exact phrase "machine learning"
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-200 mb-2">Semantic Search</h4>
                <div className="bg-green-900/20 p-4 rounded border border-green-500/20">
                  <div className="mb-2">
                    <strong className="text-green-300">Query:</strong>{" "}
                    <code className="text-sm">"machine learning"</code>
                  </div>
                  <div>
                    <strong className="text-green-300">Results:</strong>
                    <div className="text-gray-300 text-sm mt-1">
                      Notes about AI, neural networks, algorithms, data science, automation, etc.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Related Content Suggestions</h3>
            <p className="text-gray-300 mb-4">
              AI analyzes your current note and suggests related content from your knowledge base.
            </p>

            <div className="bg-black/50 p-4 rounded border border-purple-500/20">
              <h4 className="font-bold text-purple-300 mb-2">Example: While reading "React Hooks"</h4>
              <div className="text-gray-300 text-sm">
                <p className="mb-2">
                  <strong>AI Suggestions:</strong>
                </p>
                <ul className="space-y-1">
                  <li>• "useState vs useReducer" - Similar concepts</li>
                  <li>• "Component Lifecycle" - Related topic</li>
                  <li>• "React Performance Tips" - Complementary knowledge</li>
                  <li>• "Custom Hooks Examples" - Practical applications</li>
                  <li>• "React 18 Features" - Recent developments</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-4">Question Answering</h3>
            <p className="text-gray-300 mb-4">
              Ask questions about your notes in natural language and get AI-powered answers with source citations.
            </p>

            <div className="space-y-4">
              <div className="bg-black/50 p-4 rounded border border-purple-500/20">
                <div className="mb-2">
                  <strong className="text-blue-300">Question:</strong> "What are the main benefits of meditation I've
                  noted?"
                </div>
                <div>
                  <strong className="text-green-300">AI Answer:</strong>
                  <div className="text-gray-300 text-sm mt-1">
                    Based on your notes, you've identified several key benefits of meditation: stress reduction
                    (mentioned in "Daily Mindfulness Practice"), improved focus and concentration (from "Productivity
                    Techniques"), better sleep quality (noted in "Sleep Optimization"), and enhanced emotional
                    regulation (discussed in "Mental Health Strategies").
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-gray-200 mb-2">Question Types</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Factual questions</li>
                    <li>• Comparison queries</li>
                    <li>• Summary requests</li>
                    <li>• Trend analysis</li>
                    <li>• Relationship exploration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-200 mb-2">Answer Features</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Source citations</li>
                    <li>• Confidence scores</li>
                    <li>• Related questions</li>
                    <li>• Follow-up suggestions</li>
                    <li>• Export answers as notes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">Search Shortcuts & Tips</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Keyboard Shortcuts</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Quick Search</span>
                <kbd className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">Ctrl+K</kbd>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Search in Current Note</span>
                <kbd className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">Ctrl+F</kbd>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Advanced Search</span>
                <kbd className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">Ctrl+Shift+F</kbd>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Search and Replace</span>
                <kbd className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">Ctrl+H</kbd>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-gray-300">Jump to Note</span>
                <kbd className="px-2 py-1 bg-black/50 rounded border border-purple-500/30 text-xs">Ctrl+O</kbd>
              </div>
            </div>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Search Best Practices</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Start with broad terms, then narrow down</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Use consistent terminology in your notes</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Combine multiple search methods</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Save frequently used searches</span>
              </li>
              <li className="flex items-start">
                <div className="w-5 h-5 rounded-full bg-green-900/30 flex items-center justify-center mr-3 mt-1">
                  <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>Explore related suggestions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 purple-gradient-text">Search Analytics</h2>
        <p className="text-gray-300 mb-6">
          Understand your search patterns and optimize your knowledge base organization.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Search Insights</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Most searched terms</li>
              <li>• Search frequency patterns</li>
              <li>• Failed search queries</li>
              <li>• Popular time periods</li>
              <li>• Content gaps identification</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Content Optimization</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Suggest missing tags</li>
              <li>• Identify orphaned content</li>
              <li>• Recommend new connections</li>
              <li>• Highlight popular topics</li>
              <li>• Content freshness analysis</li>
            </ul>
          </div>

          <div className="feature-card">
            <h3 className="text-xl font-bold mb-3">Usage Patterns</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>• Peak search times</li>
              <li>• Search method preferences</li>
              <li>• Result click-through rates</li>
              <li>• Query refinement patterns</li>
              <li>• Discovery pathways</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-purple-900/20">
        <Button asChild variant="outline" className="border-purple-500/30 hover:bg-purple-500/10">
          <Link href="/docs/features/connections">
            <ArrowLeft className="mr-2 h-4 w-4" /> Connections
          </Link>
        </Button>
        <Button asChild variant="outline" className="border-purple-500/30 hover:bg-purple-500/10">
          <Link href="/docs/features/keyboard-shortcuts">
            Keyboard Shortcuts <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
