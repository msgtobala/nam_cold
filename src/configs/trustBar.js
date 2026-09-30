import { trustBarIcons } from '@resources/trustBar';
import { strings } from '@strings/strings';
const copy = strings.trustBar;
export const trustBarConfig = {
    ariaLabel: copy.ariaLabel,
    deliveryNote: copy.deliveryNote,
    items: [
        {
            id: 'clinically-tested',
            label: copy.items.clinicallyTested,
            icon: trustBarIcons.shieldCheck,
        },
        {
            id: 'starts-fast',
            label: copy.items.startsFast,
            icon: trustBarIcons.zap,
        },
        {
            id: 'metered-spray',
            label: copy.items.meteredSpray,
            icon: trustBarIcons.droplet,
        },
        {
            id: 'preservative-free',
            label: copy.items.preservativeFree,
            icon: trustBarIcons.leaf,
        },
    ],
};
