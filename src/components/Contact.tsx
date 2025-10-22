import { Mail, Phone, Github, Linkedin, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { MatrixText } from "./ui/matrix-text";
import { RainbowButton } from "./ui/rainbow-button";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "roshanrenujan20020426@gmail.com",
    href: "mailto:roshanrenujan20020426@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+94 768674228",
    href: "tel:+94768674228",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/Renujan",
    href: "https://github.com/Renujan",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "roshan-renujan",
    href: "https://www.linkedin.com/in/roshan-renujan",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Jaffna, Sri Lanka",
    href: null,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-black">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-primary font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-6 text-white text-center md:text-left">
            Available for select
            <br />
            freelance opportunities
          </h2>

          <MatrixText
            text="Have an exciting project? Need help with it? Send me an email or contact me via instant message!"
            className="text-lg text-gray-300 mb-12 leading-relaxed"
            initialDelay={500}
            letterAnimationDuration={300}
            letterInterval={50}
          />

          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <div key={index} className="bg-black border border-white/10 rounded-xl p-6 hover-lift">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-white" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-gray-300 mb-1">
                        {contact.label}
                      </p>
                      {contact.href ? (
                        <a
                          href={contact.href}
                          target={contact.href.startsWith("http") ? "_blank" : undefined}
                          rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="font-medium text-white hover:text-white/80 transition-colors break-words"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="font-medium text-white">{contact.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <RainbowButton
              className="font-semibold text-white"
              onClick={() => window.location.href = 'mailto:roshanrenujan20020426@gmail.com'}
            >
              <Mail className="mr-2" size={18} />
              Get In Touch
            </RainbowButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
