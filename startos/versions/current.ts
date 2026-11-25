import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.6.5:3',
  releaseNotes: {
    en_US:
      'TEST BUILD. Fixes the stuck "connecting" state: live stats now render on miners whose firmware exposes no power target (Bitaxe AxeOS, stock Antminer), with an explicit "no power control" note instead of a dead slider. Poll timeout raised to 15s. Also includes the test.3 fixes (LAN scan of 192.168.0.0/21 + 10.0.0.0/21, manual IP/CIDR add, parallel subnet scans, manual CIDR limited to private /21-or-tighter, scan errors surfaced). Sideload only; not published to any registry.',
    es_ES:
      'COMPILACIÓN DE PRUEBA. Corrige el estado "connecting" permanente: los datos en vivo se muestran en mineros cuyo firmware no expone objetivo de potencia (Bitaxe AxeOS, Antminer de serie), con una nota explícita de "sin control de potencia" en lugar de un slider muerto. Tiempo de espera de sondeo aumentado a 15s. Incluye los arreglos de test.3 (escaneo LAN de 192.168.0.0/21 + 10.0.0.0/21, alta manual de IP/CIDR, escaneos en paralelo, CIDR manual limitado a rangos privados /21 o más ajustados, errores de escaneo visibles). Solo sideload; no publicado en ningún registro.',
    de_DE:
      'TEST-BUILD. Behebt den hängenden "connecting"-Zustand: Live-Daten werden jetzt auch bei Minern angezeigt, deren Firmware kein Leistungs-Target anbietet (Bitaxe AxeOS, Antminer ab Werk), mit klarer "keine Leistungsregelung"-Meldung statt totem Schieberegler. Poll-Timeout auf 15s erhöht. Enthält außen die test.3-Fixes (LAN-Scan 192.168.0.0/21 + 10.0.0.0/21, manuelles IP/CIDR-Hinzufügen, parallele Subnet-Scans, manuelles CIDR auf private Bereiche /21 oder enger begrenzt, Scan-Fehler werden angezeigt). Nur Sideload; in keinem Registry veröffentlicht.',
    pl_PL:
      'WERSJA TESTOWA. Naprawia wiecznie wiszący stan "connecting": dane na żywo wyświetlają się dla koparek, których firmware nie udostępnia celu mocy (Bitaxe AxeOS, fabryczny Antminer), z wyraźną informacją "brak sterowania mocą" zamiast martwego suwaka. Limit czasu odpytywania zwiększony do 15 s. Zawiera też poprawki z test.3 (skanowanie LAN 192.168.0.0/21 + 10.0.0.0/21, ręczne dodawanie IP/CIDR, równoległe skanowanie podsieci, ręczny CIDR ograniczony do prywatnych /21 lub wększych, błędy skanowania są zgłaszane). Tylko sideload; nie publikowane w żadnym rejestrze.',
    fr_FR:
      'VERSION TEST. Corrige l\u2019État "connecting" permanent : les données en direct s\u2019affichent désormais pour les mineurs dont le firmware n\u2019expose pas de cible de puissance (Bitaxe AxeOS, Antminer d\u2019origine), avec une note explicite "pas de contrôle de puissance" au lieu d\u2019un curseur mort. Délai de sondage porté à 15 s. Inclut les correctifs de test.3 (scan LAN 192.168.0.0/21 + 10.0.0.0/21, ajout manuel IP/CIDR, scans de sous-réseaux en parallèle, CIDR manuel limité aux plages privées /21 ou plus précises, erreurs de scan affichées). Sideload uniquement ; non publié dans aucun registre.',
  },
  migrations: {
    up: async ({ effects }) => {},
    down: IMPOSSIBLE,
  },
})
