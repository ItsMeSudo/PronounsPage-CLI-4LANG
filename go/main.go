package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

type Response struct {
	ID           string        `json:"id"`
	Username     string        `json:"username"`
	AvatarSource string        `json:"avatarSource"`
	BannedReason interface{}   `json:"bannedReason"`
	BannedTerms  []interface{} `json:"bannedTerms"`
	Team         int           `json:"team"`
	EmailHash    string        `json:"emailHash"`
	Avatar       string        `json:"avatar"`
	Profiles     struct {
		En struct {
			Opinions struct {
			} `json:"opinions"`
			Names []struct {
				Value   string `json:"value"`
				Opinion string `json:"opinion"`
			} `json:"names"`
			Pronouns []struct {
				Value   string `json:"value"`
				Opinion string `json:"opinion"`
			} `json:"pronouns"`
			Description   string   `json:"description"`
			Age           int      `json:"age"`
			Links         []string `json:"links"`
			VerifiedLinks struct {
			} `json:"verifiedLinks"`
			Flags       []string      `json:"flags"`
			CustomFlags []interface{} `json:"customFlags"`
			Words       []struct {
				Header string `json:"header"`
				Values []struct {
					Value   string `json:"value"`
					Opinion string `json:"opinion"`
				} `json:"values"`
			} `json:"words"`
			TeamName         string        `json:"teamName"`
			FooterName       string        `json:"footerName"`
			FooterAreas      []interface{} `json:"footerAreas"`
			Credentials      []interface{} `json:"credentials"`
			CredentialsLevel interface{}   `json:"credentialsLevel"`
			CredentialsName  interface{}   `json:"credentialsName"`
			Card             interface{}   `json:"card"`
			CardDark         interface{}   `json:"cardDark"`
		} `json:"en"`
	} `json:"profiles"`
}

func main() {

	// Get req
	var user string = "example"

	resp, err := http.Get("https://pronouns.page/api/profile/get/" + user + "?version=2")
	if err != nil {
		fmt.Println("hiba lol")
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)

	var result Response
	if err := json.Unmarshal(body, &result); err != nil {
		fmt.Println("hiba lol")
	}

	var DontUseThatLol string

	fmt.Printf("Felhasználó: %v\n", result.Username)

	var IsBanned string
	if result.BannedReason == nil {
		IsBanned = "Nem"
	} else {
		IsBanned = "Igen"
	}
	fmt.Printf("Bannolva?: %v\n", IsBanned)

	var Names string
	for _, element := range result.Profiles.En.Names {
		if element.Opinion == "yes" || element.Opinion == "meh" {
			Names += element.Value + ", "
		} else {
			DontUseThatLol += element.Value + ", "
		}
	}
	Names = Names[:len(Names)-2]
	fmt.Printf("Preferált megnevezések: %v\n", Names)

	var Pronounss string
	for _, element := range result.Profiles.En.Pronouns {
		if element.Opinion == "yes" || element.Opinion == "meh" {
			Pronounss += element.Value + ", "
		} else {
			DontUseThatLol += element.Value + ", "
		}
	}
	Pronounss = Pronounss[:len(Pronounss)-2]

	fmt.Printf("Névmások: %v\n", Pronounss)
	fmt.Printf("Kor: %v\n", result.Profiles.En.Age)
	fmt.Printf("Linkek: %v\n", forvalami(result.Profiles.En.Links))
	fmt.Printf("Megadott zászlók: %v\n", forvalami(result.Profiles.En.Flags))

	var Honorifics string
	for _, element := range result.Profiles.En.Words[0].Values {
		if element.Opinion == "yes" || element.Opinion == "meh" {
			Honorifics += element.Value + ", "
		} else {
			DontUseThatLol += element.Value + ", "
		}
	}
	Honorifics = Honorifics[:len(Honorifics)-2]
	fmt.Printf("Megszólítások: %v\n", Honorifics)
	// fmt.Printf(result.Profiles.En.Words[0].Values[0].Value)

	var PndFD string
	for _, element := range result.Profiles.En.Words[1].Values {
		if element.Opinion == "yes" || element.Opinion == "meh" {
			PndFD += element.Value + ", "
		} else {
			DontUseThatLol += element.Value + ", "
		}
	}
	PndFD = PndFD[:len(PndFD)-2]
	fmt.Printf("Barátoknak és családnak: %v\n", PndFD)

	var Compliments string
	for _, element := range result.Profiles.En.Words[2].Values {
		if element.Opinion == "yes" || element.Opinion == "meh" {
			Compliments += element.Value + ", "
		} else {
			DontUseThatLol += element.Value + ", "
		}
	}
	Compliments = Compliments[:len(Compliments)-2]
	fmt.Printf("Bókok: %v\n", Compliments)

	var Rship string
	for _, element := range result.Profiles.En.Words[3].Values {
		if element.Opinion == "yes" || element.Opinion == "meh" {
			Rship += element.Value + ", "
		} else {
			DontUseThatLol += element.Value + ", "
		}
	}
	Rship = Rship[:len(Rship)-2]
	fmt.Printf("Kapcsolat leírások: %v\n", Rship)
	fmt.Printf("----------------------------------------------------------------------------------------\n")
	DontUseThatLol = DontUseThatLol[:len(DontUseThatLol)-2]
	fmt.Printf("Nem preferált kifejezések: %v\n", DontUseThatLol)
	fmt.Printf("----------------------------------------------------------------------------------------\n")
	fmt.Printf("SUDO#0814 2022")
}

func forvalami(object []string) string {
	var Thing string
	for _, element := range object {
		Thing += element + ", "
	}
	Thing = Thing[:len(Thing)-2]
	return Thing
}
