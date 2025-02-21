
import { translations } from "../utils/translations";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Admin = ({ currentLanguage }: { currentLanguage: string }) => {
  const t = translations[currentLanguage];

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
                <Input placeholder="CONFI LLC" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Contact Email</label>
                <Input type="email" placeholder="contact@confi.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <Input placeholder="+1234567890" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t.aboutSection}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Story Title</label>
                <Input placeholder="Our Story" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Story Description</label>
                <Textarea placeholder="Enter your story..." className="h-32" />
              </div>
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
                    <Button variant="outline">Edit</Button>
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
