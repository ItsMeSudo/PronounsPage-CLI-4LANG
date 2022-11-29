import requests
from requests.exceptions import HTTPError

try:
    user = input("Adj meg egy felhasználó nevet: ")
    response = requests.get('https://pronouns.page/api/profile/get/'+user+'?version=2')
    response.raise_for_status()
    result = response.json()
except:
    print("HIBA")

print("Felhasználó: " + result['username'])
DontUseThatLol = ""
OtherWords = ""

IsBanned = "Nem"
if (result['bannedReason'] == None):
    IsBanned = "Nem"
else:
    IsBanned = "Igen"
print("Bannolva?: "+ IsBanned)

def ifforcycle(input):
    out = ""
    global DontUseThatLol
    global OtherWords
    for i in input:
        if ([i][0]['opinion'] == 'yes'):
            out += [i][0]['value'] + ", "
        elif ([i][0]['opinion'] == 'meh'):
            out += [i][0]['value'] + ", "
        elif ([i][0]['opinion'] == 'no'):
            DontUseThatLol += [i][0]['value'] + ", "
        else:
            OtherWords += [i][0]['value'] + ", "
    return out[:-2] + ''

def defaforcycle(input):
    out = ""
    for i in input:
        out += i + ", "
    return out[:-2] + ''

print("Preferált megnevezések: " + ifforcycle(result['profiles']['en']['names']))
print("Névmások: "+ ifforcycle(result['profiles']['en']['pronouns']))
print("Kor: "+ str(result['profiles']['en']['age']))
print("Linkek: "+ defaforcycle(result['profiles']['en']['links']))
print("Megadott zászlók: "+ defaforcycle(result['profiles']['en']['flags']))
print("Megszólítások: "+ ifforcycle(result['profiles']['en']['words'][0]['values']))
print("Barátoknak és családnak: "+ ifforcycle(result['profiles']['en']['words'][1]['values']))
print("Bókok: "+ ifforcycle(result['profiles']['en']['words'][2]['values']))
print("Kapcsolat leírások: "+ ifforcycle(result['profiles']['en']['words'][3]['values']))
print("----------------------------------------------------------------------------------------")
print("Nem preferált kifejezések: "+ DontUseThatLol[:-2] + '')
print("Egyéb kifejezések: "+ OtherWords[:-2] + '')
print("----------------------------------------------------------------------------------------")
print("SUDO#0814 2022")