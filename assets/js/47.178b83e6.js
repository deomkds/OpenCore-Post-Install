(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{548:function(e,t,o){"use strict";o.r(t);var i=o(27),l=Object(i.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"filevault"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#filevault"}},[e._v("#")]),e._v(" FileVault")]),e._v(" "),o("p",[e._v("FileVault is macOS's builtin drive encryption, and with OpenCore support for it has been drastically improved compared to the legacy Clover drivers.")]),e._v(" "),o("p",[e._v("To start, you'll need the following .efi drivers:")]),e._v(" "),o("ul",[o("li",[e._v("OpenRuntime.efi\n"),o("ul",[o("li",[o("a",{attrs:{href:"https://github.com/acidanthera/OpenCorePkg/releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenUsbKbDxe.efi"),o("OutboundLink")],1),e._v(" for DuetPkg users(systems without UEFI support)")])])])]),e._v(" "),o("p",[o("strong",[e._v("Do not use VirtualSMC.efi with OpenCore, its already baked inside")]),e._v(". You do however require VirtualSMC.kext still")]),e._v(" "),o("p",[e._v("Setting in your config.plist:")]),e._v(" "),o("ul",[o("li",[e._v("Misc -> Boot\n"),o("ul",[o("li",[o("code",[e._v("PollAppleHotKeys")]),e._v(" set to YES(While not needed can be helpful)")])])]),e._v(" "),o("li",[e._v("Misc -> Security\n"),o("ul",[o("li",[o("code",[e._v("AuthRestart")]),e._v(" set to YES(Enables Authenticated restart for FileVault 2 so password is not required on reboot. Can be considered a security risk so optional)")])])]),e._v(" "),o("li",[e._v("NVRAM -> Add -> 4D1EDE05-38C7-4A6A-9CC6-4BCCA8B38C14\n"),o("ul",[o("li",[o("code",[e._v("UIScale")]),e._v(" set to "),o("code",[e._v("02")]),e._v(" for high resolution small displays")])])]),e._v(" "),o("li",[e._v("UEFI -> Input\n"),o("ul",[o("li",[o("code",[e._v("KeySupport")]),e._v(" set to YES(Only when using OpenCore's builtin input, users of OpenUsbKbDxe should avoid)")])])]),e._v(" "),o("li",[e._v("UEFI -> Output\n"),o("ul",[o("li",[o("code",[e._v("ProvideConsoleGop")]),e._v(" to YES")])])]),e._v(" "),o("li",[e._v("UEFI -> ProtocolOverrides\n"),o("ul",[o("li",[o("code",[e._v("FirmwareVolume")]),e._v(" set to YES")]),e._v(" "),o("li",[o("code",[e._v("HashServices")]),e._v(" set to YES for Broadwell and older(this includes X99), this is needed for systems with broken SHA-1 hashing")])])]),e._v(" "),o("li",[e._v("UEFI -> Quirks\n"),o("ul",[o("li",[o("code",[e._v("RequestBootVarRouting")]),e._v(" set to YES")]),e._v(" "),o("li",[o("code",[e._v("ExitBootServicesDelay")]),e._v(" set to "),o("code",[e._v("3000")]),e._v("-"),o("code",[e._v("5000")]),e._v(" if you receive "),o("code",[e._v("Still waiting for root device")]),e._v(" on Aptio IV firmwares(Broadwell and older)")])])])]),e._v(" "),o("p",[e._v("With all this, you can proceed to enable FileVault like on a normal mac under "),o("code",[e._v("System Preferences -> Security & Privacy -> FileVault")])]),e._v(" "),o("p",[e._v("For UI issues, see "),o("RouterLink",{attrs:{to:"/cosmetic/verbose.html"}},[e._v("Fixing Resolution and Verbose")])],1)])}),[],!1,null,null,null);t.default=l.exports}}]);