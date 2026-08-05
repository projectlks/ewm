import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*", // Search Engine အားလုံးကို ဝင်ခွင့်ပြုသည်
            allow: "/", // Page အားလုံးကို ဖတ်ခွင့်ပြုသည်
        },
        // စောစောက ဖန်တီးထားသော sitemap လမ်းကြောင်းကို ညွှန်ပြပေးရပါမည်
        sitemap: "https://eastwindmyanmar.com.mm/sitemap.xml",
    };
}