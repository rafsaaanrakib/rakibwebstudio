export const site = {
  name: "Rakib Web Studio",
  owner: "Rakib Ahmed",
  email: "rakib.official13155@gmail.com",
  whatsappNumber: "8801577173135",
  whatsappDisplay: "+880 1577-173135",
  googleProfile: "https://g.page/r/Ccg3vtjipm4LEBI",
  linkedin: "https://www.linkedin.com/in/rafsaanrakib/",
  instagram: "https://www.instagram.com/dev.rakibahmed/",
  tiktok: "https://www.tiktok.com/@dev.rakibahmed",
  x: "https://x.com/devrakibahmed",
  facebook: "https://www.facebook.com/rakibwebstudio",
  location: "Chattogram, Bangladesh",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://rakibwebstudio.com",
  gaId: "G-BTCM3XB3LN",
};

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
