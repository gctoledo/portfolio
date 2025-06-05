import ContactForm from "../_components/ContactForm";
import Section from "../_components/Section";
import SectionTitle from "../_components/SectionTitle";

const Contact = () => {
  return (
    <Section sectionId="contact" className="max-w-4xl w-full mx-auto">
      <SectionTitle type="red">Contato</SectionTitle>
      <ContactForm />
    </Section>
  );
};

export default Contact;
