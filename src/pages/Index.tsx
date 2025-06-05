import { useState } from "react";
import { TextField } from "@/components/ui/text-field";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showErrors, setShowErrors] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowErrors(true);

    if (email && password && name) {
      alert("Form submitted successfully!");
      setShowErrors(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-red-hat">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            TextField Component Demo
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A beautiful, accessible text field component built with React and
            TailwindCSS, featuring the Red Hat Text font and custom styling
            variables.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          {/* Form Example */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Interactive Form</CardTitle>
              <CardDescription>
                Try filling out this form to see the TextField component in
                action
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <TextField
                  label="Full Name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  error={showErrors && !name ? "Name is required" : ""}
                />

                <TextField
                  label="Email Address"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  error={showErrors && !email ? "Email is required" : ""}
                />

                <TextField
                  label="Password"
                  type="password"
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  error={showErrors && !password ? "Password is required" : ""}
                />

                <Button type="submit" className="w-full">
                  Submit Form
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Component Variants */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle>Component Variants</CardTitle>
              <CardDescription>
                Different states and configurations of the TextField component
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Default State
                </h3>
                <TextField label="Label" placeholder="Placeholder" />
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Disabled State
                </h3>
                <TextField label="Label" placeholder="Placeholder" disabled />
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  With Value
                </h3>
                <TextField
                  label="Username"
                  placeholder="Enter username"
                  value="john.doe"
                  readOnly
                />
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Error State
                </h3>
                <TextField
                  label="Email"
                  placeholder="Enter your email"
                  error="Invalid email format"
                />
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-3">
                  Required Field
                </h3>
                <TextField
                  label="Required Field"
                  placeholder="This field is required"
                  required
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Features Section */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="p-8">
            <CardHeader>
              <CardTitle>Component Features</CardTitle>
              <CardDescription>
                This TextField component includes all the features you need for
                production apps
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">Accessible</h3>
                  <p className="text-sm text-gray-600">
                    Built with proper ARIA attributes and semantic HTML
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a4 4 0 004-4V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">Responsive</h3>
                  <p className="text-sm text-gray-600">
                    Works perfectly on all screen sizes and devices
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    Customizable
                  </h3>
                  <p className="text-sm text-gray-600">
                    Easy to customize with CSS variables and class overrides
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-6 h-6 text-orange-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">TypeScript</h3>
                  <p className="text-sm text-gray-600">
                    Full TypeScript support with proper type definitions
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-6 h-6 text-red-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">Validation</h3>
                  <p className="text-sm text-gray-600">
                    Built-in support for error states and validation messages
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <svg
                      className="w-6 h-6 text-indigo-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-medium text-gray-900 mb-1">
                    Documentation
                  </h3>
                  <p className="text-sm text-gray-600">
                    Well-documented with clear examples and API reference
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
