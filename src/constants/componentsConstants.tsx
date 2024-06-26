export  interface iBanner {
    types: iBannerItem[],
    bannerSpeed?: number
}

export interface iBannerItem {
    name: "GITHUB" | "LINKED-IN" | "X",
    action: ()=> void
}

export const BannerItems: iBannerItem[] = [
    { name: "GITHUB", action: ()=> {}},
    { name: "X", action: ()=> {}},
    { name: "LINKED-IN", action: ()=> {}},
]
