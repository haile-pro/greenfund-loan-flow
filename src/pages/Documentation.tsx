import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Code, 
  Database, 
  Shield, 
  Zap, 
  GitBranch, 
  Terminal,
  FileText,
  Globe,
  Layers,
  Settings
} from "lucide-react";

const Documentation = () => {
  const techStack = [
    { name: "Solidity", description: "Smart contract development", icon: FileText },
    { name: "Ethers.js", description: "Ethereum interaction library", icon: Globe },
    { name: "React", description: "Frontend user interface", icon: Code },
    { name: "Hardhat", description: "Development environment", icon: Terminal },
    { name: "MetaMask", description: "Web3 wallet integration", icon: Shield },
    { name: "IPFS", description: "Decentralized file storage", icon: Database },
  ];

  const features = [
    {
      title: "Smart Contract Architecture",
      description: "Automated loan disbursement and repayment tracking with built-in security measures",
      items: [
        "ERC-20 compatible loan tokens",
        "Multi-signature wallet integration",
        "Automated interest calculation",
        "Default protection mechanisms"
      ]
    },
    {
      title: "Frontend Integration",
      description: "React-based dApp interface with seamless Web3 connectivity",
      items: [
        "MetaMask wallet connection",
        "Real-time transaction status",
        "Responsive mobile design",
        "Web3Modal integration"
      ]
    },
    {
      title: "Environmental Impact Tracking",
      description: "Transparent monitoring of environmental benefits from funded projects",
      items: [
        "CO2 reduction calculations",
        "Project verification system",
        "Impact visualization dashboard",
        "Community reporting features"
      ]
    }
  ];

  const codeExamples = [
    {
      title: "Smart Contract - Loan Creation",
      language: "Solidity",
      code: `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract GreenLoan {
    struct Loan {
        address borrower;
        uint256 amount;
        uint256 interestRate;
        uint256 duration;
        string projectDescription;
        bool isActive;
        uint256 repaidAmount;
    }
    
    mapping(uint256 => Loan) public loans;
    uint256 public nextLoanId;
    
    event LoanCreated(
        uint256 indexed loanId,
        address indexed borrower,
        uint256 amount
    );
    
    function createLoan(
        uint256 _amount,
        uint256 _interestRate,
        uint256 _duration,
        string memory _projectDescription
    ) external {
        loans[nextLoanId] = Loan({
            borrower: msg.sender,
            amount: _amount,
            interestRate: _interestRate,
            duration: _duration,
            projectDescription: _projectDescription,
            isActive: true,
            repaidAmount: 0
        });
        
        emit LoanCreated(nextLoanId, msg.sender, _amount);
        nextLoanId++;
    }
}`
    },
    {
      title: "Frontend - Wallet Connection",
      language: "TypeScript",
      code: `import { ethers } from 'ethers';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from './constants';

class Web3Service {
  private provider: ethers.providers.Web3Provider | null = null;
  private signer: ethers.Signer | null = null;
  private contract: ethers.Contract | null = null;

  async connectWallet(): Promise<string> {
    if (!window.ethereum) {
      throw new Error('MetaMask not found');
    }

    this.provider = new ethers.providers.Web3Provider(window.ethereum);
    await this.provider.send('eth_requestAccounts', []);
    
    this.signer = this.provider.getSigner();
    this.contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      CONTRACT_ABI,
      this.signer
    );

    return await this.signer.getAddress();
  }

  async createLoan(
    amount: string,
    interestRate: number,
    duration: number,
    description: string
  ): Promise<ethers.ContractTransaction> {
    if (!this.contract) throw new Error('Contract not initialized');
    
    const amountWei = ethers.utils.parseEther(amount);
    return await this.contract.createLoan(
      amountWei,
      interestRate,
      duration,
      description
    );
  }
}`
    },
    {
      title: "Hardhat Deployment Script",
      language: "TypeScript",
      code: `import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  
  console.log("Deploying contracts with account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  // Deploy GreenLoan contract
  const GreenLoan = await ethers.getContractFactory("GreenLoan");
  const greenLoan = await GreenLoan.deploy();
  await greenLoan.deployed();

  console.log("GreenLoan deployed to:", greenLoan.address);
  
  // Verify contract on Etherscan
  if (process.env.ETHERSCAN_API_KEY) {
    console.log("Waiting for block confirmations...");
    await greenLoan.deployTransaction.wait(6);
    
    await hre.run("verify:verify", {
      address: greenLoan.address,
      constructorArguments: [],
    });
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });`
    }
  ];

  const learningOutcomes = [
    "Smart contract development with Solidity and security best practices",
    "Web3 frontend integration using Ethers.js and React",
    "MetaMask wallet connection and transaction handling",
    "Hardhat development environment setup and deployment",
    "Gas optimization techniques for efficient contract execution",
    "Testing strategies for smart contracts using Waffle and Chai",
    "IPFS integration for decentralized data storage",
    "Environmental impact tracking and verification systems"
  ];

  return (
    <div className="min-h-screen bg-background pt-20 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              Technical Documentation
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete technical breakdown of the GreenFund dApp architecture, smart contracts, and implementation details
          </p>
        </div>

        {/* Overview */}
        <Card className="bg-gradient-card border-border mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Layers className="w-5 h-5" />
              <span>Project Overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-6">
              GreenFund is a decentralized application (dApp) built on Ethereum that facilitates community-driven 
              green financing. The platform connects environmentally conscious lenders with borrowers seeking funding 
              for sustainable projects, all managed through transparent smart contracts.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Key Objectives</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Democratize access to green financing</li>
                  <li>• Ensure transparent fund management</li>
                  <li>• Track environmental impact metrics</li>
                  <li>• Eliminate traditional banking intermediaries</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Target Use Cases</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Solar panel installations</li>
                  <li>• Electric vehicle purchases</li>
                  <li>• Energy efficiency upgrades</li>
                  <li>• Small wind power projects</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tech Stack */}
        <Card className="bg-gradient-card border-border mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Settings className="w-5 h-5" />
              <span>Technology Stack</span>
            </CardTitle>
            <CardDescription>
              Modern Web3 technologies powering the decentralized lending platform
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {techStack.map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-background/50 rounded-lg">
                    <Icon className="w-8 h-8 text-primary" />
                    <div>
                      <div className="font-medium">{tech.name}</div>
                      <div className="text-sm text-muted-foreground">{tech.description}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        {/* Architecture & Features */}
        <div className="space-y-6 mb-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-gradient-card border-border">
              <CardHeader>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {feature.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Code Examples */}
        <Card className="bg-gradient-card border-border mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Code className="w-5 h-5" />
              <span>Code Examples</span>
            </CardTitle>
            <CardDescription>
              Key implementation snippets demonstrating core functionality
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {codeExamples.map((example, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium">{example.title}</h4>
                  <Badge variant="outline">{example.language}</Badge>
                </div>
                <div className="bg-background/80 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-sm text-muted-foreground">
                    <code>{example.code}</code>
                  </pre>
                </div>
                {index < codeExamples.length - 1 && <Separator className="mt-6" />}
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Learning Outcomes */}
        <Card className="bg-gradient-card border-border mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <GitBranch className="w-5 h-5" />
              <span>Learning Outcomes</span>
            </CardTitle>
            <CardDescription>
              Key skills and knowledge gained through this Web3 development project
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {learningOutcomes.map((outcome, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <Zap className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{outcome}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Future Improvements */}
        <Card className="bg-gradient-card border-border">
          <CardHeader>
            <CardTitle>Future Enhancements</CardTitle>
            <CardDescription>
              Planned improvements and potential scaling opportunities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3">Technical Improvements</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• Layer 2 scaling solutions (Polygon, Arbitrum)</li>
                  <li>• Advanced smart contract governance</li>
                  <li>• Cross-chain compatibility</li>
                  <li>• Enhanced security auditing</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3">Feature Additions</h4>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>• AI-powered project assessment</li>
                  <li>• Real-time environmental monitoring</li>
                  <li>• Community governance tokens</li>
                  <li>• Insurance integration</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Documentation;