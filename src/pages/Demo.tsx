import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Wallet, 
  DollarSign, 
  Leaf, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  Clock,
  AlertCircle,
  Zap
} from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Demo = () => {
  const [walletConnected, setWalletConnected] = useState(false);
  const [selectedTab, setSelectedTab] = useState("dashboard");
  const [loanAmount, setLoanAmount] = useState("");
  const [projectDescription, setProjectDescription] = useState("");

  const connectWallet = () => {
    // Simulate wallet connection
    setTimeout(() => {
      setWalletConnected(true);
      toast({
        title: "Wallet Connected",
        description: "MetaMask wallet connected successfully!",
      });
    }, 1000);
  };

  const submitLoanApplication = () => {
    if (!loanAmount || !projectDescription) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Application Submitted",
      description: "Your green loan application has been submitted to the blockchain!",
    });
    
    setLoanAmount("");
    setProjectDescription("");
  };

  const mockLoans = [
    {
      id: "0x1a2b3c",
      borrower: "0x742d...8f1a",
      amount: "5.5 ETH",
      purpose: "Solar Panel Installation",
      status: "Active",
      repaymentProgress: 65,
      environmental_impact: "2.5 tons CO2 saved",
    },
    {
      id: "0x2b3c4d",
      borrower: "0x851e...9g2b",
      amount: "12.0 ETH",
      purpose: "Wind Turbine Project",
      status: "Pending",
      repaymentProgress: 0,
      environmental_impact: "8.2 tons CO2 projected",
    },
    {
      id: "0x3c4d5e",
      borrower: "0x962f...ah3c",
      amount: "3.2 ETH",
      purpose: "Electric Vehicle Purchase",
      status: "Completed",
      repaymentProgress: 100,
      environmental_impact: "1.8 tons CO2 saved",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-accent text-accent-foreground";
      case "Pending": return "bg-yellow-500 text-yellow-50";
      case "Completed": return "bg-green-500 text-green-50";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Active": return <TrendingUp className="w-3 h-3" />;
      case "Pending": return <Clock className="w-3 h-3" />;
      case "Completed": return <CheckCircle className="w-3 h-3" />;
      default: return <AlertCircle className="w-3 h-3" />;
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              GreenFund dApp Demo
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience decentralized green financing powered by Ethereum smart contracts
          </p>
        </div>

        {/* Wallet Connection */}
        <div className="flex justify-center mb-8">
          {!walletConnected ? (
            <Button
              onClick={connectWallet}
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
              size="lg"
            >
              <Wallet className="w-5 h-5 mr-2" />
              Connect MetaMask Wallet
            </Button>
          ) : (
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-card rounded-lg border">
              <div className="w-3 h-3 bg-accent rounded-full animate-glow-pulse" />
              <span className="text-foreground">Connected: 0x742d...8f1a</span>
              <Badge className="bg-accent text-accent-foreground">
                5.24 ETH
              </Badge>
            </div>
          )}
        </div>

        {walletConnected && (
          <>
            {/* Navigation Tabs */}
            <div className="flex justify-center mb-8">
              <div className="flex space-x-1 bg-muted rounded-lg p-1">
                {[
                  { id: "dashboard", label: "Dashboard", icon: TrendingUp },
                  { id: "apply", label: "Apply for Loan", icon: DollarSign },
                  { id: "impact", label: "Environmental Impact", icon: Leaf },
                ].map(({ id, label, icon: Icon }) => (
                  <Button
                    key={id}
                    variant={selectedTab === id ? "default" : "ghost"}
                    onClick={() => setSelectedTab(id)}
                    className={`
                      flex items-center space-x-2
                      ${selectedTab === id ? "bg-primary text-primary-foreground" : ""}
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </Button>
                ))}
              </div>
            </div>

            {/* Dashboard Tab */}
            {selectedTab === "dashboard" && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <Card className="bg-gradient-card border-border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Total Loans</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-primary" />
                        <span className="text-2xl font-bold">156</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-card border-border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Total Funded</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-5 h-5 text-accent" />
                        <span className="text-2xl font-bold">847.6 ETH</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-card border-border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">CO2 Saved</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2">
                        <Leaf className="w-5 h-5 text-green-500" />
                        <span className="text-2xl font-bold">1,234 tons</span>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gradient-card border-border">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-sm font-medium text-muted-foreground">Success Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="w-5 h-5 text-blue-500" />
                        <span className="text-2xl font-bold">94.2%</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Loans */}
                <Card className="bg-gradient-card border-border">
                  <CardHeader>
                    <CardTitle>Recent Green Loans</CardTitle>
                    <CardDescription>
                      Live loan applications and repayment status on the blockchain
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockLoans.map((loan) => (
                        <div
                          key={loan.id}
                          className="flex items-center justify-between p-4 bg-background/50 rounded-lg border"
                        >
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <span className="font-medium">{loan.purpose}</span>
                              <Badge className={getStatusColor(loan.status)}>
                                {getStatusIcon(loan.status)}
                                <span className="ml-1">{loan.status}</span>
                              </Badge>
                            </div>
                            <div className="text-sm text-muted-foreground space-y-1">
                              <div>Borrower: {loan.borrower}</div>
                              <div>Amount: {loan.amount}</div>
                              <div className="flex items-center space-x-1">
                                <Leaf className="w-3 h-3 text-green-500" />
                                <span>{loan.environmental_impact}</span>
                              </div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground mb-1">
                              Repayment Progress
                            </div>
                            <div className="flex items-center space-x-2">
                              <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-accent transition-all duration-300"
                                  style={{ width: `${loan.repaymentProgress}%` }}
                                />
                              </div>
                              <span className="text-sm font-medium">
                                {loan.repaymentProgress}%
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Apply Tab */}
            {selectedTab === "apply" && (
              <div className="max-w-2xl mx-auto">
                <Card className="bg-gradient-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Zap className="w-5 h-5" />
                      <span>Apply for Green Loan</span>
                    </CardTitle>
                    <CardDescription>
                      Submit your application for a blockchain-powered green loan
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="amount">Loan Amount (ETH)</Label>
                      <Input
                        id="amount"
                        type="number"
                        placeholder="e.g., 5.5"
                        value={loanAmount}
                        onChange={(e) => setLoanAmount(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="project">Project Description</Label>
                      <Textarea
                        id="project"
                        placeholder="Describe your green project (solar panels, electric vehicle, etc.)"
                        value={projectDescription}
                        onChange={(e) => setProjectDescription(e.target.value)}
                        rows={4}
                      />
                    </div>

                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Smart Contract Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Automated loan disbursement</li>
                        <li>• Transparent repayment tracking</li>
                        <li>• Environmental impact verification</li>
                        <li>• Community voting on applications</li>
                      </ul>
                    </div>

                    <Button
                      onClick={submitLoanApplication}
                      className="w-full bg-gradient-primary hover:shadow-glow"
                      size="lg"
                    >
                      Submit Application
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            {/* Impact Tab */}
            {selectedTab === "impact" && (
              <div className="space-y-6">
                <Card className="bg-gradient-card border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <Leaf className="w-5 h-5 text-green-500" />
                      <span>Environmental Impact Dashboard</span>
                    </CardTitle>
                    <CardDescription>
                      Track the real-world environmental benefits of funded projects
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center p-6 bg-background/50 rounded-lg">
                        <div className="text-3xl font-bold text-green-500 mb-2">1,234</div>
                        <div className="text-sm text-muted-foreground">Tons CO2 Reduced</div>
                      </div>
                      <div className="text-center p-6 bg-background/50 rounded-lg">
                        <div className="text-3xl font-bold text-blue-500 mb-2">89</div>
                        <div className="text-sm text-muted-foreground">Solar Projects</div>
                      </div>
                      <div className="text-center p-6 bg-background/50 rounded-lg">
                        <div className="text-3xl font-bold text-purple-500 mb-2">245</div>
                        <div className="text-sm text-muted-foreground">EVs Purchased</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Demo;