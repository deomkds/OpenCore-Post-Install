const {
    description
} = require('../package')

module.exports = {
    title: 'Pós-instalação do OpenCore',
    description: description,
    head: [
        ['meta', {
            name: 'theme-color',
            content: '#3eaf7c'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-capable',
            content: 'yes'
        }],
        ['meta', {
            name: 'apple-mobile-web-app-status-bar-style',
            content: 'black'
        }],
        ["link", {
            rel: "'stylesheet",
            href: "/styles/website.css"
        }, ]
    ],
    base: '/OpenCore-Post-Install/',
    theme: 'vuepress-theme-succinct',
    globalUIComponents: [
        'ThemeManager'
    ],

    themeConfig: {
        lastUpdated: true,
        repo: 'https://github.com/deomkds/OpenCore-Post-Install',
        editLinks: false,
        docsDir: 'OpenCore-Post-Install',
        editLinkText: '',
        logo: '/homepage.png',
        nav: [{
            text: 'Outros Guias',
            ariaLabel: 'Language Menu',
            items: [{
                text: 'Site Original (em inglês)',
                link: 'https://dortania.github.io/'
            },
            {
                text: 'Primeiros Passos com a ACPI',
                link: 'https://deomkds.github.io/Getting-Started-With-ACPI/'
            },
            {
                text: 'Guia de Instalação do OpenCore',
                link: 'https://deomkds.github.io/OpenCore-Install-Guide/'
            },
            {
                text: 'Multiboot com o OpenCore',
                link: 'https://deomkds.github.io/OpenCore-Multiboot/'
            },            
            {
                text: 'Guia de Compra de GPUs',
                link: 'https://deomkds.github.io/GPU-Buyers-Guide/'
            },
            {
                text: 'Guia de Compra de Wi-Fi',
                link: 'https://deomkds.github.io/Wireless-Buyers-Guide/'
            },
            {
                text: 'Guia de Compra Anti-Hackintosh',
                link: 'https://deomkds.github.io/Anti-Hackintosh-Buyers-Guide/'
            },
            ]
        },
        ],
        sidebar: [{
                title: 'Introdução',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    '',
                ]

            },
            {
                title: 'Universal',
                collapsable: false,
                sidebarDepth: 2,
                children: [

                    ['/universal/audio', 'Corrigindo o Áudio'],
                    ['/universal/oc2hdd', 'Iniciando sem Pendrive'],
                    ['/universal/update', 'Atualizando o OpenCore, as kexts e o macOS'],
                    ['/universal/drm', 'Corrigindo a DRM'],
                    ['/universal/iservices', 'Corrigindo os iServiços'],
                    ['/universal/pm', 'Corrigindo o Gerenciamento de Energia'],
                    ['/universal/sleep', 'Corrigindo a Suspensão'],
                ]
            },
            {
                title: 'Correções de USB',
                collapsable: false,
                sidebarDepth: 1,
                children: [
                    ['/usb/', 'Mapeamento de USBs: Introdução'],
                    ['/usb/system-preparation', 'Preparação do Sistema'],
                    {
                        title: 'Mapeamento de USBs',
                        collapsable: true,
                        sidebarDepth: 2,
                        children: [
                            ['/usb/intel-mapping/intel', 'Mapeamento de USBs em Intel'],
                            ['/usb/manual/manual', 'Mapeamento Manual'],
                        ]
                    },
                    {
                        title: 'Outras Correções',
                        collapsable: true,
                        sidebarDepth: 1,
                        children: [
                            ['/usb/misc/power', 'Corrigindo a Energia da USB'],
                            ['/usb/misc/shutdown', 'Corrigindo Desligamento/Reinicialização'],
                            ['/usb/misc/instant-wake', 'Corrigindo o Retorno Imediato da Suspensão'],
                            ['/usb/misc/keyboard', 'Acordar o Computador com o Teclado'],
                        ]
                    },
                ]
            },
            {
                title: 'Segurança',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    ['/universal/security', 'Segurança e FileVault'],
                    {
                        title: '',
                        collapsable: false,
                        sidebarDepth: 2,
                        children: [
                            ['/universal/security/filevault', 'FileVault'],
                            ['/universal/security/vault', 'Vault'],
                            ['/universal/security/scanpolicy', 'ScanPolicy'],
							              ['/universal/security/password', 'Senha de Menu no OpenCore'],
                            ['/universal/security/applesecureboot', 'Inicialização Segura da Apple'],
                        ]
                    },
                ]
            },
            {
                title: 'Específicos de Notebooks',
                collapsable: false,
                children: [
                    ['/laptop-specific/battery', 'Corrigindo os Níveis de Bateria'],

                ]
            },
            {
                title: 'Cosméticos',
                collapsable: false,
                children: [
                    ['/cosmetic/verbose', 'Corrigindo Resolução e Modo Verbose'],
                    ['/cosmetic/gui', 'Ativando a Interface Gráfica e o Som de Boot'],
                    ['/universal/memory', 'Corrigindo Erros de Memória no MacPro7,1'],
                ]
            },
            {
                title: 'Multiboot',
                collapsable: false,
                children: [
					          ['https://deomkds.github.io/OpenCore-Multiboot/', 'Multiboot com o OpenCore'],
                    ['/multiboot/bootstrap', 'Configurando LauncherOption'],
                    ['/multiboot/bootcamp', 'Instalando o BootCamp'],
                ]
            },
            {
                title: 'Outros',
                collapsable: false,
                children: [
                    ['/misc/rtc', 'Corrigindo o RTC'],
                    ['/misc/msr-lock', 'Corrigindo a Trava de CFG'],
                    ['/misc/nvram', 'NVRAM Emulada'],
                ]
            },
            {
                title: 'Correções de GPU',
                collapsable: false,
                children: [
                    ['/gpu-patching/', 'Patch Detalhado de GPU'],
		            {
		                title: 'GPU Integrada Intel Moderna',
		                collapsable: false,
		                children: [
		                    ['/gpu-patching/intel-patching/', 'Introdução aos Patches de GPU Integrada'],
		                    ['/gpu-patching/intel-patching/vram', 'Patch de VRAM'],
							['/gpu-patching/intel-patching/connector', 'Patch de Tipo de Conector'],
							['/gpu-patching/intel-patching/busid', 'Patch de BusID'],
		                ]
		            },
		            {
		                title: 'GPU Integrada Intel Antiga',
		                collapsable: false,
		                children: [
		                    ['/gpu-patching/legacy-intel/', 'Patch de GMA'],
		                ]
		            },
		            {
		                title: 'Nvidia Antiga',
		                collapsable: false,
		                children: [
		                    ['/gpu-patching/nvidia-patching/', 'Patch de Nvidia'],
		                ]
		            },
                ]
            },

        ],
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        'vuepress-plugin-smooth-scroll',
        ['vuepress-plugin-medium-zoom',
            {
                selector: "img",
                options: {
                    background: 'var(--bodyBgColor)'
                }
            }
        ],
    ]
}
