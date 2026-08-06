import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://eastwindmyanmar.com.mm";

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1, // ပင်မစာမျက်နှာဖြစ်သဖြင့် ဦးစားပေးအဆင့် အမြင့်ဆုံးထားပါသည်
        },
        {
            url: `${baseUrl}/solutions`,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.5,
        },
        // app/sitemap.ts ထဲတွင် ထပ်တိုးရန်
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 0.3,
        },
        // အခြား Page များရှိပါက ဤနေရာတွင် ဆက်ထည့်နိုင်ပါသည်
    ];
}