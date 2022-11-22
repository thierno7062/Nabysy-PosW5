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
}

export const TopSelling: Product[] = [

    {
        image: 'assets/images/users/user1.jpg',
        uname: 'Hanna Gover',
        gmail: '2022-11-06',
        productName: '01:24:51',
        status: '750',
        weeks: 144,
        budget: '4250'
    },
    {
        image: 'assets/images/users/user2.jpg',
        uname: 'Hanna Gover',
        gmail: '2022-11-06',
        productName: '01:33:41',
        status: '696',
        weeks: 145,
        budget: '3554'
    },
    {
        image: 'assets/images/users/user3.jpg',
        uname: 'Hanna Gover',
        gmail: '2022-11-07',
        productName: '22:21:44	',
        status: '3554',
        weeks: 189,
        budget: '0'
    },
    {
        image: 'assets/images/users/user4.jpg',
        uname: 'Hanna Gover',
        gmail: '2022-11-07',
        productName: '22:30:58',
        status: '8000',
        weeks: 190,
        budget: '2000'
    },

]

export const Employee : TableRows[] = [
    {
        fname: "Mark",
        lname: "Otto",
        uname: "@mdo",
    },
    {
        fname: "Jacob",
        lname: "Thornton",
        uname: "@fat",
    },
    {
        fname: "Larry",
        lname: "the Bird",
        uname: "@twitter",
    }
]

// *************************
export const api = {
  endPoint:'http://technopharm.homeip.net/nabysygsapi/',
  tokenUser:'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYW1fYXBwbGljYXRpb24iOiJbTkFieVN5IEdTXSIsInBhbV9jbGllbnQiOiItUEFVTCBFVCBBSUNIQSBNQUNISU5FUklFLSIsImNsaWVudF9hZHIiOiJaYWNrIE1iYW8gREFLQVJcL1NFTkVHQUwiLCJjbGllbnRfdGVsIjoiVGVsOiArMjIxIDMzIDgzNiAxNCA3NyIsImJvdXRpcXVlX2lkIjoxLCJJZEJvdXRpcXVlIjoxLCJJZFBvc3RlIjoyLCJOb21Qb3N0ZSI6IkNhaXNzZV8yIiwidXNlcl9pZCI6MywidXNlcl9sb2dpbiI6InRoaWVybm8iLCJ1c2VyX2RhdGEiOiJ7XCJJRFwiOlwiM1wiLFwiTk9NXCI6XCJOSUFOR1wiLFwiUFJFTk9NXCI6XCJUaGlybm9cIixcIkFEUkVTU0VcIjpcIkRha2FyIE1hbGlrYVwiLFwiVEVMXCI6XCJcIixcIkxPR0lOXCI6XCJ0aGllcm5vXCIsXCJQQVNTV09SRFwiOlwicGFzc2VcIixcIkRBVEVFTlRSRUVcIjpcIjIwMjItMDgtMDFcIixcIkRBVEVDUkVBVElPTlwiOlwiMjAyMi0xMS0wOVwiLFwiSEVVUkVDUkVBVElPTlwiOlwiXCIsXCJOSVZFQVVBQ0NFU1wiOlwiNFwiLFwiUFJPRklMRVwiOlwiXCIsXCJCTE9RVUVcIjpcIk5PTlwiLFwiQ0hBTkdFREFURVwiOlwiMFwiLFwiQ0hBTkdFRkFDVFVSRVwiOlwiMFwiLFwiQ0hBTkdFVE9UQUxCT05cIjpcIjBcIixcIlNIT1dJTlZFTlRBSVRFX0FWXCI6XCIwXCIsXCJTSE9XRkFDVFVSRVwiOlwiMFwiLFwiVVBEQVRFUEFTU1dPUkRcIjpcIjBcIixcIlVQREFURVNUT0NLXCI6XCIwXCIsXCJDSEFOR0VMSVZSQUlTT05EQVRFXCI6XCIwXCIsXCJFVEFUXCI6XCJBY3RpZlwiLFwiTG9jYWxMb2dpbkNvZGVcIjpcIjBcIixcIlNIT1dDQUlTU0VcIjpcIjBcIixcIlNIT1dNQUdBWklOXCI6XCIwXCIsXCJPbmx5TGltaXRlRmFjdFRvRGF5XCI6XCIwXCIsXCJTaG93U3RvY2tWZW50ZVwiOlwiMFwiLFwiU0hPV01hZ2FzaW5cIjpcIjBcIixcIlNob3dGU1wiOlwiMFwiLFwiQ0FOX1JFVE9VUl9WRU5URVwiOlwiMVwiLFwiQ0FOX1JFVE9VUl9CTFwiOlwiMVwiLFwiQ0FOX1JFVE9VUl9UUkFOU0FDVElPTlwiOlwiMVwiLFwiQ0FOX0NBTkNFTF9WRU5URVwiOlwiMVwiLFwiQ0FOX0NBTkNFTF9CTFwiOlwiMVwiLFwiQ0FOX0NBTkNFTF9UUkFOU0FDVElPTlwiOlwiMVwiLFwiU2lnbmF0dXJlXCI6XCJcIixcIklkRW1wbG95ZVwiOlwiMFwiLFwiQ29tcHRlRW1wbG95ZVwiOlwiXCIsXCJSU1wiOlwiXCJ9IiwiaXNzIjoiaHR0cHM6XC9cL2dyb3VwZS1wYW0ubmV0IiwiYXVkIjoiaHR0cHM6XC9cL2dyb3VwZS1wYW0ubmV0IiwiaWF0IjoxNjY4NTY5MjA0LCJuYmYiOjE2Njg1NjkyMDQsImV4cCI6MTY2ODY1NTYwNCwiQXV0b3IiOiJQYXVsIGV0IEFpY2hhIE1hY2hpbmVyaWUifQ.fpHoQs9-Y5vL8K4LLqW3pTPK2Czf7K1dOfl1617d_zs',
  bonAchat_php:'bonachat_action.php?'
};
