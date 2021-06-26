(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{470:function(t,e,a){t.exports=a.p+"assets/img/usb-map-start.2bf5fb53.png"},471:function(t,e,a){t.exports=a.p+"assets/img/mapping.fed79a6a.png"},472:function(t,e,a){t.exports=a.p+"assets/img/255.2cb7146c.png"},473:function(t,e,a){t.exports=a.p+"assets/img/build-map.1ed28acd.png"},474:function(t,e,a){t.exports=a.p+"assets/img/usb-done.840e704b.png"},556:function(t,e,a){"use strict";a.r(e);var o=a(27),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"usb-mapping"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#usb-mapping"}},[t._v("#")]),t._v(" USB Mapping")]),t._v(" "),o("h3",{attrs:{id:"this-guide-is-outdated-see-usbmap-s-readme-for-updated-information-until-this-guide-is-rewritten"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#this-guide-is-outdated-see-usbmap-s-readme-for-updated-information-until-this-guide-is-rewritten"}},[t._v("#")]),t._v(" This guide is  outdated, see "),o("a",{attrs:{href:"https://github.com/corpnewt/USBMap",target:"_blank",rel:"noopener noreferrer"}},[t._v("USBMap's README"),o("OutboundLink")],1),t._v(" for updated information until this guide is rewritten")]),t._v(" "),o("p",[t._v("Table of Contents:")]),t._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"#Intel-usb-mapping"}},[t._v("Intel USB Mapping")])])]),t._v(" "),o("p",[t._v("So with the prerequisites out of the way, we can finally get to the meat of this guide. And now we get to finally read one of my favorite books before I go to bed each night: "),o("a",{attrs:{href:"https://uefi.org/sites/default/files/resources/ACPI_6_3_final_Jan30.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("The Advanced Configuration and Power Interface (ACPI) Specification!"),o("OutboundLink")],1)]),t._v(" "),o("p",[t._v("Now if you haven't read through this before(which I highly recommend you do, it's a thrilling tale), I'll point you to the meat of the USB situation:")]),t._v(" "),o("ul",[o("li",[t._v("Section 9.14: _UPC (USB Port Capabilities)")])]),t._v(" "),o("p",[t._v("Here we're greeted with all the possible USB ports in ACPI:")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",{staticStyle:{"text-align":"left"}},[t._v("Type")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("Info")]),t._v(" "),o("th",{staticStyle:{"text-align":"left"}},[t._v("Comments")])])]),t._v(" "),o("tbody",[o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("0")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("USB 2.0 Type-A connector")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("This is what macOS will default all ports to when no map is present")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("USB 3.0 Type-A connector")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("3.0, 3.1 and 3.2 ports share the same Type")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Type C connector - USB 2.0-only")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Mainly seen in phones")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("9")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Type C connector - USB 2.0 and USB 3.0 with Switch")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Flipping the device "),o("strong",[t._v("does not")]),t._v(" change the ACPI port")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("10")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Type C connector - USB 2.0 and USB 3.0 without Switch")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Flipping the device "),o("strong",[t._v("does")]),t._v(" change the ACPI port. generally seen on 3.1/2 motherboard headers")])]),t._v(" "),o("tr",[o("td",{staticStyle:{"text-align":"left"}},[t._v("255")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("Proprietary connector")]),t._v(" "),o("td",{staticStyle:{"text-align":"left"}},[t._v("For Internal USB ports like Bluetooth")])])])]),t._v(" "),o("h3",{attrs:{id:"intel-usb-mapping"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#intel-usb-mapping"}},[t._v("#")]),t._v(" Intel USB Mapping")]),t._v(" "),o("p",[t._v("USB mapping on Intel is super easy mainly because both the ACPI is sane and more tools available for the platform. For this guide we'll be using the "),o("a",{attrs:{href:"https://github.com/corpnewt/USBMap",target:"_blank",rel:"noopener noreferrer"}},[t._v("USBmap tool"),o("OutboundLink")],1),t._v(" from CorpNewt.")]),t._v(" "),o("p",[t._v("Now open up USBmap.command and select "),o("code",[t._v("D. Discover Ports")]),t._v(":")]),t._v(" "),o("p",[o("img",{attrs:{src:a(470),alt:""}}),t._v(" "),o("img",{attrs:{src:a(471),alt:""}})]),t._v(" "),o("p",[t._v("The interface for USBmap is quite simple and easy to grasp so won't go into detail here, the "),o("a",{attrs:{href:"https://github.com/corpnewt/USBMap",target:"_blank",rel:"noopener noreferrer"}},[t._v("README.md"),o("OutboundLink")],1),t._v(" should do you well enough. The basic idea is insert a device, give it a name to remember the port by, remove and then try another port until you have a whole list of ports you want to keep.")]),t._v(" "),o("ul",[o("li",[o("strong",[t._v("Note")]),t._v(": USRx(ie. USR1, USR2) ports are not real USB ports, they're specifically "),o("a",{attrs:{href:"https://software.Intel.com/content/www/us/en/develop/documentation/amt-developer-guide/top/storage-redirection.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("USBR ports"),o("OutboundLink")],1),t._v(" which macOS has no support for(and why real Macs don't have this). These can be excluded from your USB map.")])]),t._v(" "),o("p",[t._v("Once you're done discovering your ports, select "),o("code",[t._v("Press Q then [enter] to stop")]),t._v(" then head to "),o("code",[t._v("P. Edit Plist & Create SSDT/Kext")]),t._v(" from the main menu.")]),t._v(" "),o("p",[t._v("For this example, I'll choose all the ports that were discovered, remember that there is a 15 port limit so you "),o("strong",[t._v("cannot")]),t._v(" go over it. USB hubs will count as one USB port so you can expand from there if you are limited on ports.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(472),alt:""}})]),t._v(" "),o("div",{staticClass:"language-text extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("T:1,3,4,5,6,7,16,17,19,21,22:3\n")])])]),o("p",[t._v("The above will set all ports listed to type 3 which is USB 3.0.")]),t._v(" "),o("div",{staticClass:"language-text extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[t._v("T:9:255\n")])])]),o("p",[t._v("This will set my Bluetooth to internal, this is super important as macOS expects Bluetooth to always be internal.")]),t._v(" "),o("p",[o("img",{attrs:{src:a(473),alt:""}})]),t._v(" "),o("p",[t._v("Now we can select "),o("code",[t._v("K. Build USBMap.kext")]),t._v(" and let it build our kext for us.")]),t._v(" "),o("p",[o("strong",[t._v("Note")]),t._v(": Do not use either the SSDT-UIAC.aml "),o("strong",[t._v("or")]),t._v(' USBInjectAll with the USBmap.kext. This kext we just made should be used by itself with no other USB kexts besides XhciUnsupported if your system needs it. Reason for this is USBInjectAll is no longer being maintained and the USBmap.kext version is how real Macs USB map as well so as close to "Apple Like" as possible to fit the OpenCore mood.')]),t._v(" "),o("p",[t._v("Now reboot and run USBmap again, you should see a lot less ports in your map:")]),t._v(" "),o("p",[o("img",{attrs:{src:a(474),alt:""}})])])}),[],!1,null,null,null);e.default=s.exports}}]);