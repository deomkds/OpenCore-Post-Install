(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{531:function(t,a,e){"use strict";e.r(a);var s=e(27),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"legacy-intel-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#legacy-intel-setup"}},[t._v("#")]),t._v(" Legacy Intel Setup")]),t._v(" "),e("p",[t._v("Covers support for the following GPU models:")]),t._v(" "),e("ul",[e("li",[t._v("GMA 900 (10.4 and 10.5)\n"),e("ul",[e("li",[t._v("Partial support in 10.6 and 10.7, however acceleration issues are common")])])]),t._v(" "),e("li",[t._v("GMA 950(10.4-10.7)\n"),e("ul",[e("li",[t._v("GMA 3150's can be spoofed for support, however proper acceleration is missing")])])]),t._v(" "),e("li",[t._v("GMA X3100(10.5-10.7)\n"),e("ul",[e("li",[t._v("Note only mobile models(ie. 965 Express Chipset Family)")])])])]),t._v(" "),e("p",[t._v("Please note this page is more of an info dump, we won't be going to too great of detail on setup though we plan to expand this page more for it. Information is based off of "),e("a",{attrs:{href:"https://github.com/CloverHackyColor/CloverBootloader/blob/2961827dce9c0ab26345c00fb5a9c581f96c0d6b/rEFIt_UEFI/Platform/gma.cpp",target:"_blank",rel:"noopener noreferrer"}},[t._v("Clover's InjectIntel"),e("OutboundLink")],1)]),t._v(" "),e("h2",{attrs:{id:"prerequisites"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),e("p",[t._v("Unfortunately GMA support is a bit more complicated with PCs, and because of this we need to force a 32-Bit kernelspace as the 64-Bit GMA drivers are known for weird GPU corruption and sleep issues. To do this:")]),t._v(" "),e("ul",[e("li",[t._v("Ensure all your kexts are either 32-Bit or FAT\n"),e("ul",[e("li",[t._v("Run "),e("code",[t._v("lipo -archs")]),t._v(" on the kext's binary to verify")]),t._v(" "),e("li",[t._v("Common kexts are hosted here: "),e("a",{attrs:{href:"https://github.com/khronokernel/Legacy-Kexts",target:"_blank",rel:"noopener noreferrer"}},[t._v("Legacy-Kexts"),e("OutboundLink")],1)])])]),t._v(" "),e("li",[t._v("Ensure you're booting a 32-Bit kernel\n"),e("ul",[e("li",[t._v("Set "),e("code",[t._v("Kernel -> Scheme -> KernelArch")]),t._v(" to "),e("code",[t._v("i386")])])])])]),t._v(" "),e("p",[t._v("Now we can proceed to setup:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#gma-950-setup"}},[t._v("GMA 950 Setup")]),t._v(" "),e("ul",[e("li",[t._v("Supports GMA 900, 950 and 3150")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#gma-x3100-setup"}},[t._v("GMA X3100 Setup")]),t._v(" "),e("ul",[e("li",[t._v("Only supports mobile GMA X3100")])])]),t._v(" "),e("li",[e("a",{attrs:{href:"#troubleshooting"}},[t._v("Troubleshooting")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#dell-laptops"}},[t._v("Dell Laptops")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#kernel-panic-after-30-seconds"}},[t._v("Kernel Panic after 30 seconds")])])])])]),t._v(" "),e("h2",{attrs:{id:"gma-950-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gma-950-setup"}},[t._v("#")]),t._v(" GMA 950 setup")]),t._v(" "),e("ul",[e("li",[t._v("Supported OSes: 10.4-10.7")])]),t._v(" "),e("p",[t._v("This section is mainly relevant for GMA 900 and 950 users, and partial support for the GMA 3150 series. Note that GMA 900 are only properly supported in 10.4 and 10.5")]),t._v(" "),e("p",[t._v("Within AppleIntelGMA950.kext's Info.plist, the following Device IDs are supported:")]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" Values pulled from OS X 10.7.0")]),t._v("\n0x2582 - GMA 900 - Grantsdale - 945GM/GMS/940GML\n0x2592 - GMA 900 - Alviso     - 945G\n0x2772 - GMA 950 - Lakeport   - 915GM/GMS/910GML\n0x27A2 - GMA 950 - Calistoga  - 82915G/GV/910GL\n")])])]),e("p",[t._v("If your iGPU is from one of the above families, but the device ID is not present you can easily add a fake device-id:")]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" GMA 950(Calistoga) Fake ID")]),t._v("\nconfig.plist:\n|-DeviceProperties\n |- Add\n  |- PciRoot(0x0)/Pci(0x2,0x0)\n   |- device-id | Data | A2270000\n")])])]),e("p",[t._v("For a full list of supported GPU families, see below:")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("GMA Device families")]),t._v(" "),e("p",[t._v("Following pulled from Clover's GMA.c:")]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" Grantsdale")]),t._v("\n0x2582 - GMA 900 - 945GM/GMS/940GML\n0x258A - GMA 900 - E7221\n0x2782 - GMA 900 - 82915G\n\n"),e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" Alviso")]),t._v("\n0x2592 - GMA 900 - 915GM/GMS/910GML\n0x2792 - GMA 900 - 915GM/GMS/910GML\n\n"),e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" Lakeport")]),t._v("\n0x2772 - GMA 950 - 915GM/GMS/910GML\n0x2776 - GMA 950 - 915GM/GMS/910GML\n\n"),e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" Calistoga")]),t._v("\n0x27A2 - GMA 950 - 82915G/GV/910GL\n0x27A6 - GMA 950 - 945GM/GMS/GME, 943/940GML\n0x27AE - GMA 950 - 945GSE\n")])])])]),t._v(" "),e("h3",{attrs:{id:"property-injection"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#property-injection"}},[t._v("#")]),t._v(" Property injection")]),t._v(" "),e("p",[t._v("To ensure proper acceleration with OpenCore, head to your config.plist then "),e("code",[t._v("DeviceProperties -> Add")]),t._v(". Create a new child called "),e("code",[t._v("PciRoot(0x0)/Pci(0x2,0x0)")]),t._v(" and we'll be adding our needed properties:")]),t._v(" "),e("p",[t._v("Desktops need very little properties, and most of the time can boot without any:")]),t._v(" "),e("ul",[e("li",[t._v("Desktop:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("| model         | String | GMA 950  | // Mainly cosmetic\n| AAPL,HasPanel | Data   | 00000000 |\n")])])]),e("ul",[e("li",[t._v("Laptop:")])]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("| model                     | String | GMA 950  | // Mainly cosmetic\n| AAPL,HasPanel             |  Data  | 01000000 |\n| AAPL01,BacklightIntensity |  Data  | 3F000008 |\n| AAPL01,BootDisplay        |  Data  | 01000000 |\n| AAPL01,DataJustify        |  Data  | 01000000 |\n| AAPL01,DualLink           |  Data  | 00       |\n\n* Set AAPL01,DualLink to 01 if your internal display is higher than 1366x768\n")])])]),e("p",[t._v("For a full list of what Clover injects, see below:")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Clover's InjectIntel Properties")]),t._v(" "),e("p",[t._v("The below properties is what Clover will inject for GMA 900/950 series iGPUs:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("| built-in                  | Data | 01       |\n| AAPL,HasPanel             | Data | 01000000 |\n| AAPL01,BacklightIntensity | Data | 3F000008 |\n| AAPL01,BootDisplay        | Data | 01000000 |\n| AAPL01,DataJustify        | Data | 01000000 |\n| AAPL01,Dither             | Data | 00000000 |\n| AAPL01,Interlace          | Data | 00000000 |\n| AAPL01,Inverter           | Data | 00000000 |\n| AAPL01,InverterCurrent    | Data | 00000000 |\n| AAPL01,LinkFormat         | Data | 00000000 |\n| AAPL01,LinkType           | Data | 00000000 |\n| AAPL01,Pipe               | Data | 01000000 |\n| AAPL01,Refresh            | Data | 3B000000 |\n| AAPL01,Stretch            | Data | 00000000 |\n| AAPL01,T1                 | Data | 00000000 |\n| AAPL01,T2                 | Data | 01000000 |\n| AAPL01,T3                 | Data | C8000000 |\n| AAPL01,T4                 | Data | C8010000 |\n| AAPL01,T5                 | Data | 01000000 |\n| AAPL01,T6                 | Data | 00000000 |\n| AAPL01,T7                 | Data | 90100000 |\n")])])])]),t._v(" "),e("p",[t._v("For GMA 3150 users, you'll also want to add this patch:")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("GMA 3150 Patch")]),t._v(" "),e("p",[t._v("Under Kernel -> Patch, add the following:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("Comment    = GMA 3150 Cursor corruption fix\nEnabled    = True\nIdentifier = com.apple.driver.AppleIntelIntegratedFramebuffer\nFind       = 8b550883bab0000000017e36890424e832bbffff\nReplace    = b800000002909090909090909090eb0400000000\nMaxKernel  = 11.99.99\nMinKernel  = 8.00.00\n")])])]),e("p",[t._v("Source: "),e("a",{attrs:{href:"https://github.com/CloverHackyColor/CloverBootloader/blob/2961827dce9c0ab26345c00fb5a9c581f96c0d6b/rEFIt_UEFI/Platform/gma.cpp#L1735L1739",target:"_blank",rel:"noopener noreferrer"}},[t._v("GMA.c"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"gma-x3100-setup"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gma-x3100-setup"}},[t._v("#")]),t._v(" GMA X3100 Setup")]),t._v(" "),e("ul",[e("li",[t._v("Supported OSes: 10.5-10.7")])]),t._v(" "),e("p",[t._v("Within AppleIntelGMAX3100.kext's Info.plist, the following Device IDs are supported:")]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" Values pulled from OS X 10.7.0")]),t._v("\n0x2a02 - GMA X3100 - Crestline - GM965/GL960\n")])])]),e("p",[t._v("If your iGPU is from the Crestline family, however the device ID is not present you can easily add a fake device-id:")]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" GMA X3100(Crestline) Fake ID")]),t._v("\nconfig.plist:\n|-DeviceProperties\n |- Add\n  |- PciRoot(0x0)/Pci(0x2,0x0)\n   |- device-id | Data | 022A0000\n")])])]),e("p",[t._v("For a full list of supported GPU families, see below:")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("GMA Device families")]),t._v(" "),e("p",[t._v("Following pulled from Clover's GMA.c:")]),t._v(" "),e("div",{staticClass:"language-md extra-class"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[e("span",{pre:!0,attrs:{class:"token title important"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" Calistoga")]),t._v("\n0x2A02 - GMA X3100 - GM965/GL960\n0x2A03 - GMA X3100 - GM965/GL960\n0x2A12 - GMA X3100 - GME965/GLE960\n0x2A13 - GMA X3100 - GME965/GLE960\n")])])])]),t._v(" "),e("h3",{attrs:{id:"property-injection-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#property-injection-2"}},[t._v("#")]),t._v(" Property injection")]),t._v(" "),e("p",[t._v("To ensure proper acceleration with OpenCore, head to your config.plist then "),e("code",[t._v("DeviceProperties -> Add")]),t._v(". Create a new child called "),e("code",[t._v("PciRoot(0x0)/Pci(0x2,0x0)")]),t._v(" and we'll be adding our needed properties:")]),t._v(" "),e("p",[t._v("X3100 need very little properties, and most of the time can boot without any:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("| model                     | String | GMA X3100 | // Mainly cosmetic\n| AAPL,HasPanel             |  Data  | 01000000  |\n| AAPL,SelfRefreshSupported |  Data  | 01000000  | // Optional\n| AAPL,aux-power-connected  |  Data  | 01000000  | // Optional\n| AAPL,backlight-control    |  Data  | 01000008  | // Optional\n| AAPL01,BacklightIntensity |  Data  | 38000008  |\n| AAPL01,BootDisplay        |  Data  | 01000000  |\n| AAPL01,DataJustify        |  Data  | 01000000  |\n| AAPL01,DualLink           |  Data  | 00        |\n\n* Set AAPL01,DualLink to 01 if your internal display is higher than 1366x768\n")])])]),e("p",[t._v("For a full list of what Clover injects, see below:")]),t._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[t._v("Clover's InjectIntel Properties")]),t._v(" "),e("p",[t._v("The below properties is what Clover will inject for GMA 900/950 series iGPUs:")]),t._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("| built-in                       | Data | 01       |\n| AAPL,HasPanel                  | Data | 01000000 |\n| AAPL,SelfRefreshSupported      | Data | 01000000 |\n| AAPL,aux-power-connected       | Data | 01000000 |\n| AAPL,backlight-control         | Data | 01000008 |\n| AAPL00,blackscreen-preferences | Data | 00000008 |\n| AAPL01,BootDisplay             | Data | 01000000 |\n| AAPL01,BacklightIntensity      | Data | 38000008 |\n| AAPL01,blackscreen-preferences | Data | 00000000 |\n| AAPL01,DataJustify             | Data | 01000000 |\n| AAPL01,Dither                  | Data | 00000000 |\n| AAPL01,Interlace               | Data | 00000000 |\n| AAPL01,Inverter                | Data | 00000000 |\n| AAPL01,InverterCurrent         | Data | 08520000 |\n| AAPL01,LinkFormat              | Data | 00000000 |\n| AAPL01,LinkType                | Data | 00000000 |\n| AAPL01,Pipe                    | Data | 01000000 |\n| AAPL01,Refresh                 | Data | 3D000000 |\n| AAPL01,Stretch                 | Data | 00000000 |\n| AAPL01,T1                      | Data | 00000000 |\n| AAPL01,T2                      | Data | 01000000 |\n| AAPL01,T3                      | Data | C8000000 |\n| AAPL01,T4                      | Data | C8010000 |\n| AAPL01,T5                      | Data | 01000000 |\n| AAPL01,T6                      | Data | 00000000 |\n| AAPL01,T7                      | Data | 90100000 |\n")])])])]),t._v(" "),e("h2",{attrs:{id:"troubleshooting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[t._v("#")]),t._v(" Troubleshooting")]),t._v(" "),e("h3",{attrs:{id:"dell-laptops"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dell-laptops"}},[t._v("#")]),t._v(" Dell laptops")]),t._v(" "),e("p",[t._v("An annoying issues with Dell laptops using GMA iGPUs is that they commonly get blackscreen during boot. This is due to the "),e("code",[t._v("DVI")]),t._v(" device in ACPI, so we'll need to patch it to play nicely in macOS.")]),t._v(" "),e("p",[t._v("Example SSDT:")]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("DefinitionBlock")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SSDT"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"DRTNIA"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"SsdtDvi"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x00001000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("External")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_SB_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PCI0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SBRG"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GFX0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DVI_"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" DeviceObj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Scope")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\\_SB"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("PCI0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SBRG"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GFX0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DVI"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Method")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_STA"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" NotSerialized"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// _STA: Status")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("If")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("_OSI")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Darwin"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            Else\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Return")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0x0F")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"kernel-panic-after-30-seconds"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#kernel-panic-after-30-seconds"}},[t._v("#")]),t._v(" Kernel Panic after 30 seconds")]),t._v(" "),e("p",[t._v("Another odd issues with 10.6 and older is that the PciRoot's _UID value "),e("strong",[t._v("must")]),t._v(" be Zero else the kernel panic will happen. Example of bad UID entry:")]),t._v(" "),e("div",{staticClass:"language-c extra-class"},[e("pre",{pre:!0,attrs:{class:"language-c"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Device")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("PCI0"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Name")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_HID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("EisaId")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PNP0A08"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Use PNP0A08 to find your PciRoot")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Name")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_CID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("EisaId")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PNP0A03"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Name")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_ADR"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" One"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("Name")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("_UID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Zero"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("               "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Needs to be patched to Zero")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);