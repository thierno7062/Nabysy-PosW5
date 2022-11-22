export interface topcard {
  bgcolor: string;
  icon: string;
  title: string;
  subtitle: string;
}
export interface _length {
  bgcolor: string;
  icon: string;
  title: string;
  subtitle: string;
}

export const topcards: topcard[] = [
  {
    bgcolor: "success",
    icon: "bi bi-wallet",
    title: "$21k",
    subtitle: "Yearly Earning",
  },
  {
    bgcolor: "danger",
    icon: "bi bi-coin",
    title: "$1k",
    subtitle: "Refund given",
  },
  {
    bgcolor: "warning",
    icon: "bi bi-basket3",
    title: "456",
    subtitle: "Yearly Project",
  },
  {
    bgcolor: "info",
    icon: "bi bi-bag",
    title: "210",
    subtitle: "Weekly Sales",
  },
];

export const infolength: _length[] = [
  {
    bgcolor: "success",
    icon: "bi bi-wallet",
    title: "$21k",
    subtitle: "Yearly Earning",
  },
  {
    bgcolor: "danger",
    icon: "bi bi-coin",
    title: "$1k",
    subtitle: "Refund given",
  },
  {
    bgcolor: "warning",
    icon: "bi bi-basket3",
    title: "456",
    subtitle: "Yearly Project",
  },
  {
    bgcolor: "info",
    icon: "bi bi-bag",
    title: "210",
    subtitle: "Weekly Sales",
  },
];

// *************************
export const api = {
  endPoint: "http://technopharm.homeip.net/nabysygsapi/",
  tokenUser:
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYW1fYXBwbGljYXRpb24iOiJbTkFieVN5IEdTXSIsInBhbV9jbGllbnQiOiItUEFVTCBFVCBBSUNIQSBNQUNISU5FUklFLSIsImNsaWVudF9hZHIiOiJaYWNrIE1iYW8gREFLQVJcL1NFTkVHQUwiLCJjbGllbnRfdGVsIjoiVGVsOiArMjIxIDMzIDgzNiAxNCA3NyIsImJvdXRpcXVlX2lkIjoxLCJJZEJvdXRpcXVlIjoxLCJJZFBvc3RlIjoyLCJOb21Qb3N0ZSI6IkNhaXNzZV8yIiwidXNlcl9pZCI6MywidXNlcl9sb2dpbiI6InRoaWVybm8iLCJ1c2VyX2RhdGEiOiJ7XCJJRFwiOlwiM1wiLFwiTk9NXCI6XCJOSUFOR1wiLFwiUFJFTk9NXCI6XCJUaGlybm9cIixcIkFEUkVTU0VcIjpcIkRha2FyIE1hbGlrYVwiLFwiVEVMXCI6XCJcIixcIkxPR0lOXCI6XCJ0aGllcm5vXCIsXCJQQVNTV09SRFwiOlwicGFzc2VcIixcIkRBVEVFTlRSRUVcIjpcIjIwMjItMDgtMDFcIixcIkRBVEVDUkVBVElPTlwiOlwiMjAyMi0xMS0wOVwiLFwiSEVVUkVDUkVBVElPTlwiOlwiXCIsXCJOSVZFQVVBQ0NFU1wiOlwiNFwiLFwiUFJPRklMRVwiOlwiXCIsXCJCTE9RVUVcIjpcIk5PTlwiLFwiQ0hBTkdFREFURVwiOlwiMFwiLFwiQ0hBTkdFRkFDVFVSRVwiOlwiMFwiLFwiQ0hBTkdFVE9UQUxCT05cIjpcIjBcIixcIlNIT1dJTlZFTlRBSVRFX0FWXCI6XCIwXCIsXCJTSE9XRkFDVFVSRVwiOlwiMFwiLFwiVVBEQVRFUEFTU1dPUkRcIjpcIjBcIixcIlVQREFURVNUT0NLXCI6XCIwXCIsXCJDSEFOR0VMSVZSQUlTT05EQVRFXCI6XCIwXCIsXCJFVEFUXCI6XCJBY3RpZlwiLFwiTG9jYWxMb2dpbkNvZGVcIjpcIjBcIixcIlNIT1dDQUlTU0VcIjpcIjBcIixcIlNIT1dNQUdBWklOXCI6XCIwXCIsXCJPbmx5TGltaXRlRmFjdFRvRGF5XCI6XCIwXCIsXCJTaG93U3RvY2tWZW50ZVwiOlwiMFwiLFwiU0hPV01hZ2FzaW5cIjpcIjBcIixcIlNob3dGU1wiOlwiMFwiLFwiQ0FOX1JFVE9VUl9WRU5URVwiOlwiMVwiLFwiQ0FOX1JFVE9VUl9CTFwiOlwiMVwiLFwiQ0FOX1JFVE9VUl9UUkFOU0FDVElPTlwiOlwiMVwiLFwiQ0FOX0NBTkNFTF9WRU5URVwiOlwiMVwiLFwiQ0FOX0NBTkNFTF9CTFwiOlwiMVwiLFwiQ0FOX0NBTkNFTF9UUkFOU0FDVElPTlwiOlwiMVwiLFwiU2lnbmF0dXJlXCI6XCJcIixcIklkRW1wbG95ZVwiOlwiMFwiLFwiQ29tcHRlRW1wbG95ZVwiOlwiXCIsXCJSU1wiOlwiXCJ9IiwiaXNzIjoiaHR0cHM6XC9cL2dyb3VwZS1wYW0ubmV0IiwiYXVkIjoiaHR0cHM6XC9cL2dyb3VwZS1wYW0ubmV0IiwiaWF0IjoxNjY4NjcxMTkzLCJuYmYiOjE2Njg2NzExOTMsImV4cCI6MTY2ODc1NzU5MywiQXV0b3IiOiJQYXVsIGV0IEFpY2hhIE1hY2hpbmVyaWUifQ.VDdNCNkTkFn7GAzi57WXEZUknUBYYfbSVjmkvrSlC24",
  bonAchat_php: "bonachat_action.php?",
  boutique_php: "boutique_action.php?",
};
