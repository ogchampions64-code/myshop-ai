/* ╔══════════════════════════════════════════════════════════════════════╗
   ║  ⚙️  CONFIGURATION — SEUL FICHIER À MODIFIER                        ║
   ║  Ce fichier est partagé par index.html ET contact.html.              ║
   ║                                                                      ║
   ║  ▶ LIENS STRIPE : Dashboard Stripe → Produits → sur la ligne du      ║
   ║    prix → ⋯ → « Create payment link » → copier l'URL                 ║
   ║    (ex. https://buy.stripe.com/test_aBcD1234)                        ║
   ║                                                                      ║
   ║  ▶ INVITE DISCORD : sur votre serveur Discord → Paramètres du        ║
   ║    serveur → Invités → Créer une invitation → copier le lien        ║
   ║    (ex. https://discord.gg/AbCdEf1234)                               ║
   ╚══════════════════════════════════════════════════════════════════════╝ */

const STRIPE_CONFIG = {
  /* ── Boutique web & IA ── */
  web:       { url: "https://buy.stripe.com/test_cNi9AScf82798rg1aH9k401", label: "Page de site web" },
  formation: { url: "https://buy.stripe.com/test_8x27sKa705jl4b0g5B9k402", label: "Formation informatique & IA" },
  trois_d:   { url: "https://buy.stripe.com/test_aFa14mgvoh23bDs4mT9k403", label: "Programmation 3D avec IA" },
  code:      { url: "https://buy.stripe.com/test_28E3cu0wqeTVdLA4mT9k404", label: "Code IA prêt à l'emploi" },

  /* ── Services Discord — collez ici vos nouveaux liens de paiement ── */
  discord_serveur: { url: "https://buy.stripe.com/test_00weVc0wq5jl8rg7z59k405", label: "Création de serveur Discord" },
  discord_bot:     { url: "https://buy.stripe.com/test_bJe28q7YS8vxbDs8D99k406",     label: "Bot Discord sur mesure" },
  discord_pack:    { url: "https://buy.stripe.com/test_00w5kCfrk9zBdLA4mT9k407",    label: "Pack serveur + bot Discord" },
};

/* ✏️ Votre adresse email de contact (affichée sur la page contact.html) */
const MAIL_CONTACT = "MYshop-ai@proton.me";

/* ✏️ Votre lien d'invitation Discord (page contact + boutons du site) */
const DISCORD_INVITE = "https://discord.gg/9b6kNnne9X";

/* ╔═════════════════ FIN DE LA CONFIGURATION ═════════════════╗ */
