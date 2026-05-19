export const env = {
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '601159918214',
  whatsappMessage:
    process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE ??
    'Hai Astana POS! Saya berminat dengan sistem juruwang cloud anda — boleh kongsi maklumat lanjut?',
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL ?? '',
  playStoreUrl: process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? '',
  hubRegistrationUrl:
    process.env.NEXT_PUBLIC_HUB_REGISTRATION_URL ?? 'https://hub.astanabiz.com/registration_form',
  hubLoginUrl: process.env.NEXT_PUBLIC_HUB_LOGIN_URL ?? 'https://hub.astanabiz.com/',
  mcbizUrl: process.env.NEXT_PUBLIC_MCBIZ_URL ?? 'https://mcbiz.astanabiz.com',
} as const;

export function whatsappLink(message?: string): string {
  const m = message ?? env.whatsappMessage;
  return `https://wa.me/${env.whatsappNumber}?text=${encodeURIComponent(m)}`;
}
