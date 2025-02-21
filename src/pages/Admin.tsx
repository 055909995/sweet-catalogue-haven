
import { useState } from "react";
import { translations } from "../utils/translations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

interface CompanyInfo {
  name: string;
  email: string;
  phone: string;
}

interface AboutInfo {
  title: string;
  description: string;
}

const Admin = ({ currentLanguage }: { currentLanguage: string }) => {
  const t = translations[currentLanguage];
  const { toast } = useToast();

  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    name: "CONFI LLC",
    email: "contact@confi.com",
    phone: "+1234567890",
  });

  const [aboutInfo, setAboutInfo] = useState<AboutInfo>({
    title: "Our Story",
    description: "CONFI LLC has been crafting exceptional confectionery since 1925...",
  });

  const handleCompanyInfoUpdate = () => {
    // In a real app, this would make an API call to update the company info
    toast({
      title: "Success",
      description: "Company information has been updated.",
    });
  };

  const handleAboutUpdate = () => {
    // In a real app, this would make an API call to update the about section
    toast({
      title: "Success",
      description: "About section has been updated.",
    });
  };

  const handleProductUpdate = (category: string) => {
    // In a real app, this would open a modal or navigate to a product edit page
    toast({
      title: "Edit Category",
      description: `Editing ${category}...`,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">{t.adminPanel}</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>{t.generalInfo}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Company Name</label>
                <Input 
                  value={companyInfo.name}
                  onChange={(e) => setCompanyInfo({...companyInfo, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contact Email</label>
                <Input 
                  type="email"
                  value={companyInfo.email}
                  onChange={(e) => setCompanyInfo({...companyInfo, email: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <Input 
                  value={companyInfo.phone}
                  onChange={(e) => setCompanyInfo({...companyInfo, phone: e.target.value})}
                />
              </div>
              <Button onClick={handleCompanyInfoUpdate} className="w-full">
                Save Changes
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.aboutSection}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Story Title</label>
                <Input 
                  value={aboutInfo.title}
                  onChange={(e) => setAboutInfo({...aboutInfo, title: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Story Description</label>
                <Textarea 
                  value={aboutInfo.description}
                  onChange={(e) => setAboutInfo({...aboutInfo, description: e.target.value})}
                  className="h-32"
                />
              </div>
              <Button onClick={handleAboutUpdate} className="w-full">
                Save Changes
              </Button>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>{t.products}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {["Premium Chocolates", "Artisanal Candies", "Specialty Pastries"].map((category) => (
                  <div key={category} className="flex items-center justify-between p-4 border rounded-lg">
                    <span>{category}</span>
                    <Button variant="outline" onClick={() => handleProductUpdate(category)}>
                      Edit
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Admin;
