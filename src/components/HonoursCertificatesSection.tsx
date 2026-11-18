import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { Award, Eye, ImagePlus, Trash2 } from "lucide-react";
import { motion } from "motion/react";
import {
  HONOURS_CERTIFICATES,
  type HonourCertificateItem
} from "@/src/data/firmData";
import { FirmLogo } from "@/src/components/FirmLogo";
import { Button } from "@/src/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from "@/src/components/ui/dialog";

const STORAGE_KEY = "sj_associates_certificates_v1";
const SCROLL_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface HonoursCertificatesSectionProps {
  compact?: boolean;
}

export function HonoursCertificatesSection({
  compact = false
}: HonoursCertificatesSectionProps) {
  const [uploadedImages, setUploadedImages] = useState<Record<string, string>>({});
  const [activePreview, setActivePreview] = useState<HonourCertificateItem | null>(null);
  const fileInputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Record<string, string>;
        if (parsed && typeof parsed === "object") {
          setUploadedImages(parsed);
        }
      }
    } catch {
      // Ignore invalid stored payload
    }
  }, []);

  function persistImages(next: Record<string, string>) {
    setUploadedImages(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage quota overflow if large scan is uploaded
    }
  }

  function handleFileChange(certId: string, event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        persistImages({ ...uploadedImages, [certId]: reader.result });
      }
    };
    reader.readAsDataURL(file);
    event.target.value = "";
  }

  function removeCertificateImage(certId: string) {
    const next = { ...uploadedImages };
    delete next[certId];
    persistImages(next);
  }

  return (
    <section
      aria-labelledby="honours-certificates-heading"
      className={
        compact
          ? "py-4 space-y-8"
          : "relative bg-[#DAF6EF]/25 border-t border-border py-16 sm:py-20"
      }
    >
      <div className={compact ? "space-y-8" : "mx-auto max-w-[1280px] px-5 sm:px-6 space-y-10"}>
        <motion.div
          initial={{ opacity: 0.25, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: "some" }}
          transition={{ duration: 0.5, ease: SCROLL_EASE }}
          className={
            compact
              ? "flex flex-col md:flex-row md:items-end justify-between gap-4"
              : "mx-auto max-w-2xl text-center space-y-3"
          }
        >
          <div className={compact ? "space-y-2 max-w-2xl" : "space-y-3"}>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#33566D]">
              Honours &amp; Bar Recognition
            </p>
            <h2
              id="honours-certificates-heading"
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#0A2536] leading-[0.98]"
              style={{ textWrap: "balance" }}
            >
              Honours &amp; Certificates
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#33566D] leading-relaxed">
            Judicial standing, memberships, and chambers recognitions held by Adv. Sanjay Kumar Singh—with three dedicated frames to display or inspect official certificates.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {HONOURS_CERTIFICATES.map((cert, idx) => {
            const customImage = uploadedImages[cert.id];

            return (
              <motion.article
                key={cert.id}
                initial={{ opacity: 0.25, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: "some" }}
                transition={{ duration: 0.48, delay: idx * 0.08, ease: SCROLL_EASE }}
                className="rounded-[24px] border border-border bg-white p-5 flex flex-col justify-between gap-5 shadow-xs"
              >
                <div className="space-y-4">
                  {/* Framed 4:3 Certificate Plate */}
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[14px] border border-[#0A2536]/15 bg-gradient-to-br from-[#F3FAFF] via-white to-[#DAF6EF]/55">
                    {customImage ? (
                      <img
                        src={customImage}
                        alt={`${cert.title} official certificate`}
                        className="h-full w-full object-contain bg-white p-2"
                      />
                    ) : (
                      <div className="h-full w-full p-4 flex flex-col justify-between text-center">
                        <div className="h-full w-full rounded-[10px] border border-dashed border-[#33566D]/35 bg-white/75 px-4 py-4 flex flex-col items-center justify-center gap-2.5">
                          <div className="flex items-center gap-2">
                            <FirmLogo size={26} showFrame={false} />
                            <Award className="h-5 w-5 text-[#0A2536]" aria-hidden="true" />
                          </div>
                          <div className="space-y-1">
                            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#33566D]">
                              Certificate {cert.slotNumber} · {cert.seat}
                            </p>
                            <p className="text-sm font-extrabold text-[#0A2536] leading-snug">
                              {cert.issuingBody}
                            </p>
                            <p className="text-xs text-[#33566D]">
                              Certificate display frame — attach certificate scan
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Editorial Metadata (unboxed typography with · separators) */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs text-[#33566D]">
                      <span>Certificate {cert.slotNumber}</span>
                      <span aria-hidden="true">·</span>
                      <span>{cert.category}</span>
                    </div>
                    <h3 className="text-xl font-extrabold text-[#0A2536] leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#33566D]">
                      {cert.recipient} · {cert.issuingBody}
                    </p>
                    <p className="text-sm text-[#33566D] leading-relaxed">
                      {cert.citation}
                    </p>
                  </div>
                </div>

                {/* Certificate Frame Actions */}
                <div className="pt-4 border-t border-border flex flex-wrap items-center justify-between gap-2">
                  <input
                    ref={(el) => {
                      fileInputRefs.current[cert.id] = el;
                    }}
                    type="file"
                    accept="image/*"
                    className="sr-only"
                    aria-label={`Upload image for ${cert.title}`}
                    onChange={(e) => handleFileChange(cert.id, e)}
                  />

                  <button
                    type="button"
                    onClick={() => fileInputRefs.current[cert.id]?.click()}
                    className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-border bg-[#F3FAFF] px-4 py-2 text-xs font-bold text-[#0A2536] hover:bg-[#DAF6EF] transition-colors cursor-pointer"
                  >
                    <ImagePlus className="h-3.5 w-3.5" aria-hidden="true" />
                    {customImage ? "Replace" : "Add Certificate"}
                  </button>

                  <div className="flex items-center gap-1.5">
                    {customImage && (
                      <button
                        type="button"
                        aria-label={`Remove uploaded certificate for ${cert.title}`}
                        onClick={() => removeCertificateImage(cert.id)}
                        className="inline-flex min-h-[40px] min-w-[40px] items-center justify-center rounded-full border border-border bg-white text-[#33566D] hover:text-destructive transition-colors cursor-pointer"
                      >
                        <Trash2 className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                    )}
                    <button
                      type="button"
                      aria-label={`Preview ${cert.title}`}
                      onClick={() => setActivePreview(cert)}
                      className="inline-flex min-h-[40px] items-center gap-1.5 rounded-full bg-[#0A2536] px-4 py-2 text-xs font-bold text-[#F3FAFF] hover:bg-[#33566D] transition-colors cursor-pointer"
                    >
                      <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                      Preview
                    </button>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Enlarged Certificate Preview Modal */}
      <Dialog
        open={Boolean(activePreview)}
        onOpenChange={(open) => {
          if (!open) setActivePreview(null);
        }}
      >
        <DialogContent className="max-w-2xl">
          {activePreview && (
            <>
              <DialogHeader>
                <DialogTitle>{activePreview.title}</DialogTitle>
                <DialogDescription>
                  {activePreview.recipient} · {activePreview.issuingBody} · {activePreview.seat}
                </DialogDescription>
              </DialogHeader>

              <div className="overflow-hidden rounded-[14px] border border-border bg-[#F3FAFF] aspect-[4/3] flex items-center justify-center">
                {uploadedImages[activePreview.id] ? (
                  <img
                    src={uploadedImages[activePreview.id]}
                    alt={`${activePreview.title} certificate full view`}
                    className="h-full w-full object-contain bg-white p-3"
                  />
                ) : (
                  <div className="p-8 text-center space-y-4 max-w-md">
                    <div className="inline-flex items-center justify-center gap-3">
                      <FirmLogo size={36} showFrame={false} />
                      <Award className="h-7 w-7 text-[#0A2536]" aria-hidden="true" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#33566D]">
                      Certificate {activePreview.slotNumber} · {activePreview.category}
                    </p>
                    <h4 className="text-xl font-extrabold text-[#0A2536]">
                      {activePreview.issuingBody}
                    </h4>
                    <p className="text-sm text-[#33566D] leading-relaxed">
                      {activePreview.citation}
                    </p>
                    <div className="pt-2">
                      <Button
                        type="button"
                        onClick={() => fileInputRefs.current[activePreview.id]?.click()}
                        className="rounded-full"
                      >
                        <ImagePlus className="h-4 w-4" aria-hidden="true" />
                        Attach Certificate Image
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
