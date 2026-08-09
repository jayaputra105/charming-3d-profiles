
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { SectionTitle, GlassCard } from "@/components/SiteShell";
import { Reveal, RevealStagger, RevealItem } from "@/components/Reveal";


const WHATSAPP_NUMBER = "6282199870047";
const EMAIL_ADDRESS = "jayaputrasyaipul7@gmail.com";


export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24">
      <SectionTitle kicker="Contact" title="Mari Berkolaborasi" />
      <Reveal>
        <p className="-mt-4 mb-8 max-w-2xl text-muted-foreground">
          Punya rencana membuat website? Sampaikan kebutuhan Anda, saya bantu dari
          konsep, desain, hingga live di domain Anda sendiri.
        </p>
      </Reveal>

      <RevealStagger className="grid gap-5 sm:grid-cols-2" stagger={0.1}>
        <RevealItem>
          <ContactCard
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Jaya%2C%20saya%20tertarik%20bekerja%20sama.`}
            icon={<MessageCircle className="h-5 w-5" />}
            label="WhatsApp"
            value="0821-9987-0047"
            desc="Respon cepat untuk diskusi proyek, estimasi, dan timeline pengerjaan."
            primary
          />
        </RevealItem>
        <RevealItem>
          <ContactCard
            href={`mailto:${EMAIL_ADDRESS}`}
            icon={<Mail className="h-5 w-5" />}
            label="Email"
            value={EMAIL_ADDRESS}
            desc="Cocok untuk brief panjang, lampiran referensi, atau dokumen kebutuhan."
            primary
          />
        </RevealItem>
        <RevealItem>
          <ContactCard
            href={`tel:${WHATSAPP_NUMBER}`}
            icon={<Phone className="h-5 w-5" />}
            label="Phone"
            value="+62 821-9987-0047"
            desc="Tersedia untuk panggilan konsultasi singkat."
          />
        </RevealItem>
        <RevealItem>
          <ContactCard
            icon={<MapPin className="h-5 w-5" />}
            label="Lokasi"
            value="Indonesia — Remote Worldwide"
            desc="Bisa bekerja remote untuk klien di mana saja."
          />
        </RevealItem>
      </RevealStagger>
    </section>
  );
}

function ContactCard({
  href,
  icon,
  label,
  value,
  desc,
  primary,
}: {
  href?: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  desc: string;
  primary?: boolean;
}) {
  const content = (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="h-full"
    >
      <GlassCard className="h-full transition-all duration-300 hover:border-primary/60 hover:shadow-[0_0_40px_-15px_var(--primary-bright)]">
        <div className="flex items-center gap-3">
          <span
            className={`grid h-11 w-11 place-items-center rounded-xl ${
              primary
                ? "bg-gradient-to-br from-primary to-primary/60 text-primary-foreground shadow-lg shadow-primary/40"
                : "bg-secondary text-foreground ring-1 ring-primary/40"
            }`}
          >
            {icon}
          </span>
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-widest text-primary">{label}</p>
            <p className="font-bold break-all">{value}</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">{desc}</p>
      </GlassCard>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className="group block">
        {content}
      </a>
    );
  }
  return content;
}

