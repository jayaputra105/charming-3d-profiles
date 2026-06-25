import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { SiteShell, SectionTitle, GlassCard } from "@/components/SiteShell";

const WHATSAPP_NUMBER = "6282199870047";
const EMAIL_ADDRESS = "zeyyjay@gmail.com";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jaya Putra Syaipul" },
      {
        name: "description",
        content: "Hubungi Jaya Putra Syaipul via WhatsApp atau Email untuk diskusi proyek website.",
      },
      { property: "og:title", content: "Contact — Jaya Putra Syaipul" },
      {
        property: "og:description",
        content: "Hubungi Jaya Putra Syaipul via WhatsApp atau Email untuk diskusi proyek website.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteShell>
      <SectionTitle kicker="Contact" title="Mari Berkolaborasi" />
      <p className="-mt-4 mb-8 max-w-2xl text-muted-foreground">
        Punya rencana membuat website? Sampaikan kebutuhan Anda, saya bantu dari
        konsep, desain, hingga live di domain Anda sendiri.
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=Halo%20Jaya%2C%20saya%20tertarik%20bekerja%20sama.`}
          target="_blank"
          rel="noreferrer"
          className="group"
        >
          <GlassCard className="h-full transition-all group-hover:-translate-y-1 group-hover:border-primary/60">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground shadow-lg shadow-primary/40">
                <MessageCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-primary">WhatsApp</p>
                <p className="font-bold">0821-9987-0047</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Respon cepat untuk diskusi proyek, estimasi, dan timeline pengerjaan.
            </p>
          </GlassCard>
        </a>

        <a href={`mailto:${EMAIL_ADDRESS}`} className="group">
          <GlassCard className="h-full transition-all group-hover:-translate-y-1 group-hover:border-primary/60">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-primary to-primary/60 text-primary-foreground shadow-lg shadow-primary/40">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-widest text-primary">Email</p>
                <p className="font-bold break-all">{EMAIL_ADDRESS}</p>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Cocok untuk brief panjang, lampiran referensi, atau dokumen kebutuhan.
            </p>
          </GlassCard>
        </a>

        <GlassCard>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-foreground ring-1 ring-primary/40">
              <Phone className="h-5 w-5 text-primary" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-primary">Phone</p>
              <p className="font-bold">+62 821-9987-0047</p>
            </div>
          </div>
        </GlassCard>

        <GlassCard>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-secondary text-foreground ring-1 ring-primary/40">
              <MapPin className="h-5 w-5 text-primary" />
            </span>
            <div>
              <p className="text-xs uppercase tracking-widest text-primary">Lokasi</p>
              <p className="font-bold">Indonesia — Remote Worldwide</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </SiteShell>
  );
}
