import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["ko", "ja", "zh-TW", "zh-CN"],
  defaultLocale: "ko",
  localePrefix: {
    mode: "as-needed",
    prefixes: {
      // 한국어는 prefix 없음 (/)
      // 나머지는 /ja, /zh-TW, /zh-CN
    },
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
