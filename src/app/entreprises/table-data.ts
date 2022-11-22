import { Action } from "rxjs/internal/scheduler/Action";

export interface Product {
    image: string,
    uname: string,
    gmail: string,
    productName: string,
    status: string,
    weeks: number,
    budget: string
}

export interface TableRows {
    fname: string,
    lname: string,
    uname: string,
    TelSMS: string,
    Solde: string,
    Etat: string,
}

export const TopSelling: Product[] = [

    {
        image: 'assets/images/users/user1.jpg',
        uname: 'Hanna Gover',
        gmail: 'hgover@gmail.com',
        productName: 'Flexy React',
        status: 'danger',
        weeks: 35,
        budget: '95K'
    },
    {
        image: 'assets/images/users/user2.jpg',
        uname: 'Hanna Gover',
        gmail: 'hgover@gmail.com',
        productName: 'Landing pro React',
        status: 'info',
        weeks: 35,
        budget: '95K'
    },
    {
        image: 'assets/images/users/user3.jpg',
        uname: 'Hanna Gover',
        gmail: 'hgover@gmail.com',
        productName: 'Elite React	',
        status: 'warning',
        weeks: 35,
        budget: '95K'
    },
    {
        image: 'assets/images/users/user4.jpg',
        uname: 'Hanna Gover',
        gmail: 'hgover@gmail.com',
        productName: 'Ample React',
        status: 'success',
        weeks: 35,
        budget: '95K'
    },

]

export const Employee : TableRows[] = [
    {
        fname: "PAM sarl",
        lname: "Aissatou DIALLO",
        uname: "221338361477",
        TelSMS: "221775618816",
        Solde: "100000",
        Etat: "ACTIF",
    },
    {
        fname: "Jacob",
        lname: "Thornton",
        uname: "@221775618816",
        TelSMS: "@221775618816",
        Solde: "100000",
        Etat: "ACTIF",
    },
    {
        fname: "Larry",
        lname: "the Bird",
        uname: "@221775618816",
        TelSMS: "@221775618816",
        Solde: "100000",
        Etat: "ACTIF",
    }
]

// *************************
export const api = {
  endPoint:'http://technopharm.homeip.net/nabysygsapi/',
  tokenUser:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYW1fYXBwbGljYXRpb24iOiJbTkFieVN5IEdTXSIsInBhbV9jbGllbnQiOiItUEFVTCBFVCBBSUNIQSBNQUNISU5FUklFLSIsImNsaWVudF9hZHIiOiJaYWNrIE1iYW8gREFLQVJcL1NFTkVHQUwiLCJjbGllbnRfdGVsIjoiVGVsOiArMjIxIDMzIDgzNiAxNCA3NyIsImJvdXRpcXVlX2lkIjoxLCJJZEJvdXRpcXVlIjoxLCJJZFBvc3RlIjoyLCJOb21Qb3N0ZSI6IkNhaXNzZV8yIiwidXNlcl9pZCI6MywidXNlcl9sb2dpbiI6InRoaWVybm8iLCJ1c2VyX2RhdGEiOiJ7XCJJRFwiOlwiM1wiLFwiTk9NXCI6XCJOSUFOR1wiLFwiUFJFTk9NXCI6XCJUaGlybm9cIixcIkFEUkVTU0VcIjpcIkRha2FyIE1hbGlrYVwiLFwiVEVMXCI6XCJcIixcIkxPR0lOXCI6XCJ0aGllcm5vXCIsXCJQQVNTV09SRFwiOlwicGFzc2VcIixcIkRBVEVFTlRSRUVcIjpcIjIwMjItMDgtMDFcIixcIkRBVEVDUkVBVElPTlwiOlwiMjAyMi0xMS0wOVwiLFwiSEVVUkVDUkVBVElPTlwiOlwiXCIsXCJOSVZFQVVBQ0NFU1wiOlwiNFwiLFwiUFJPRklMRVwiOlwiXCIsXCJCTE9RVUVcIjpcIk5PTlwiLFwiQ0hBTkdFREFURVwiOlwiMFwiLFwiQ0hBTkdFRkFDVFVSRVwiOlwiMFwiLFwiQ0hBTkdFVE9UQUxCT05cIjpcIjBcIixcIlNIT1dJTlZFTlRBSVRFX0FWXCI6XCIwXCIsXCJTSE9XRkFDVFVSRVwiOlwiMFwiLFwiVVBEQVRFUEFTU1dPUkRcIjpcIjBcIixcIlVQREFURVNUT0NLXCI6XCIwXCIsXCJDSEFOR0VMSVZSQUlTT05EQVRFXCI6XCIwXCIsXCJFVEFUXCI6XCJBY3RpZlwiLFwiTG9jYWxMb2dpbkNvZGVcIjpcIjBcIixcIlNIT1dDQUlTU0VcIjpcIjBcIixcIlNIT1dNQUdBWklOXCI6XCIwXCIsXCJPbmx5TGltaXRlRmFjdFRvRGF5XCI6XCIwXCIsXCJTaG93U3RvY2tWZW50ZVwiOlwiMFwiLFwiU0hPV01hZ2FzaW5cIjpcIjBcIixcIlNob3dGU1wiOlwiMFwiLFwiQ0FOX1JFVE9VUl9WRU5URVwiOlwiMVwiLFwiQ0FOX1JFVE9VUl9CTFwiOlwiMVwiLFwiQ0FOX1JFVE9VUl9UUkFOU0FDVElPTlwiOlwiMVwiLFwiQ0FOX0NBTkNFTF9WRU5URVwiOlwiMVwiLFwiQ0FOX0NBTkNFTF9CTFwiOlwiMVwiLFwiQ0FOX0NBTkNFTF9UUkFOU0FDVElPTlwiOlwiMVwiLFwiU2lnbmF0dXJlXCI6XCJcIixcIklkRW1wbG95ZVwiOlwiMFwiLFwiQ29tcHRlRW1wbG95ZVwiOlwiXCIsXCJSU1wiOlwiXCJ9IiwiaXNzIjoiaHR0cHM6XC9cL2dyb3VwZS1wYW0ubmV0IiwiYXVkIjoiaHR0cHM6XC9cL2dyb3VwZS1wYW0ubmV0IiwiaWF0IjoxNjY4NjcxMTkzLCJuYmYiOjE2Njg2NzExOTMsImV4cCI6MTY2ODc1NzU5MywiQXV0b3IiOiJQYXVsIGV0IEFpY2hhIE1hY2hpbmVyaWUifQ.VDdNCNkTkFn7GAzi57WXEZUknUBYYfbSVjmkvrSlC24',
  bonAchat_php:'bonachat_action.php?'
};
