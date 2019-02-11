export interface SoieReport {
    fecha: string;
    grado: string;
    habilidades: {
            cfc: {nombre: string, valor: number};
            cfs: {nombre: string, valor: number};
            cft: {nombre: string, valor: number};
            cmr: {nombre: string, valor: number};
            cms: {nombre: string, valor: number};
            cmu_m: {nombre: string, valor: number};
            cmu_r: {nombre: string, valor: number};
            csr: {nombre: string, valor: number};
            css: {nombre: string, valor: number};
            efc: {nombre: string, valor: number};
            efu: {nombre: string, valor: number};
            esc: {nombre: string, valor: number};
            ess: {nombre: string, valor: number};
            iha: {nombre: string, valor: number};
            ihl: {nombre: string, valor: number};
            ihm: {nombre: string, valor: number};
            ihp: {nombre: string, valor: number};
            ihv: {nombre: string, valor: number};
            iphi: {nombre: string, valor: number};
            ir: {nombre: string, valor: number};
            itd: {nombre: string, valor: number};
            nsi: {nombre: string, valor: number};
            nss: {nombre: string, valor: number};
    };
    logo: string;
    nombre: string;
}
