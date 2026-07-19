export interface TeamMember {
  slug: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
}

export const team: TeamMember[] = [
  {
    slug: "founder",
    name: "[Your Name]",
    role: "Founder & Creative Director",
    bio: "Placeholder — add your bio here. Focus on what you believe about design, not just your credentials.",
    photo: "/images/team/founder.jpg",
  },
  {
    slug: "developer",
    name: "[Developer Name]",
    role: "Lead Engineer",
    bio: "Placeholder — add a short bio here. What excites you about building products?",
    photo: "/images/team/developer.jpg",
  },
  {
    slug: "designer",
    name: "[Designer Name]",
    role: "UI/UX Designer",
    bio: "Placeholder — add a short bio here. What's your design philosophy?",
    photo: "/images/team/designer.jpg",
  },
];
