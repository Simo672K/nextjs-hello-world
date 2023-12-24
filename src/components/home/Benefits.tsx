import Container from "@/components/Container";
import Section from "@/components/home/Section";
import BenefitsCard from "@/components/home/BenefitsCard";

function Benefits() {
  const cardsContent = [
    {
      title: "SEASONAL INGREDIENTS",
      content:
        "Our menus are developed from seasonal ingredients and our recipes are constantly evolving—giving you variety and options in your meal plan.",
    },
    {
      title: "SOMETHING FOR EVERYONE",
      content:
        "We offer options to fit your needs—Paleo, Gluten-Free, 1200 Calorie, High Protein Diet, Vegan/Vegetarian, Keto, breakfast, snacks and more.",
    },
    {
      title: "FRESH INGREDIENTS",
      content:
        "Each of our weekly plans come with complimentary delivery or pickup inside the Atlanta Perimeter.",
    },
  ];
  return (
    <Container className="py-16">
      <Section className="grid grid-cols-3 gap-6" title="Here What You Will Get From Us">
        {cardsContent.map((card) => (
          <BenefitsCard key={card.title} title={card.title} content={card.content} />
        ))}
      </Section>
    </Container>
  );
}
export default Benefits;
