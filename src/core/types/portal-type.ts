export const portalType = ['modal', 'floating', 'sheet'] as const;
export type PortalType = typeof portalType[number];
