require 'httparty'

puts("Adj meg egy felhasználó nevet: ")
user = gets.chop
url = 'https://pronouns.page/api/profile/get/'+user+'?version=2'
response = HTTParty.get(url)
result = response.parsed_response
puts("Felhasználó: "+result['username'])

IsBanned = ""
DontUseThisLol = ""
if result['bannedReason'] == nil
    IsBanned.concat("Nem")
else
    IsBanned.concat("Igen")
end

puts("Bannolva?: " + IsBanned)

Pronounss = ""
for i in result['profiles']['en']['pronouns']
   if i['opinion'] == 'yes'
    Pronounss.concat(i['value'])
    Pronounss.concat(", ")
   elsif i['opinion'] == 'meh'
    Pronounss.concat(i['value'])
    Pronounss.concat(", ")
   else
    DontUseThisLol.concat(i['value'])
    DontUseThisLol.concat(", ")
   end
end
puts("Névmások: " + Pronounss.chop.chop)
puts("Kor: #{result['profiles']['en']['age']}")

Linkss = ""
for i in result['profiles']['en']['links']
    Linkss.concat(i)
    Linkss.concat(", ")
end
puts("Linkek: " + Linkss.chop.chop)

Flagss = ""
for i in result['profiles']['en']['flags']
    Flagss.concat(i)
    Flagss.concat(", ")
end
puts("Megadott zászlók: " + Flagss.chop.chop)

Honorifics = ""
for i in result['profiles']['en']['words'][0]['values']
   if i['opinion'] == 'yes'
    Honorifics.concat(i['value'])
    Honorifics.concat(", ")
   elsif i['opinion'] == 'meh'
    Honorifics.concat(i['value'])
    Honorifics.concat(", ")
   else
    DontUseThisLol.concat(i['value'])
    DontUseThisLol.concat(", ")
   end
end

PndFD = ""
for i in result['profiles']['en']['words'][1]['values']
   if i['opinion'] == 'yes'
    PndFD.concat(i['value'])
    PndFD.concat(", ")
   elsif i['opinion'] == 'meh'
    PndFD.concat(i['value'])
    PndFD.concat(", ")
   else
    DontUseThisLol.concat(i['value'])
    DontUseThisLol.concat(", ")
   end
end

Compliments = ""
for i in result['profiles']['en']['words'][2]['values']
   if i['opinion'] == 'yes'
    Compliments.concat(i['value'])
    Compliments.concat(", ")
   elsif i['opinion'] == 'meh'
    Compliments.concat(i['value'])
    Compliments.concat(", ")
   else
    DontUseThisLol.concat(i['value'])
    DontUseThisLol.concat(", ")
   end
end

Rship = ""
for i in result['profiles']['en']['words'][3]['values']
   if i['opinion'] == 'yes'
    Rship.concat(i['value'])
    Rship.concat(", ")
   elsif i['opinion'] == 'meh'
    Rship.concat(i['value'])
    Rship.concat(", ")
   else
    DontUseThisLol.concat(i['value'])
    DontUseThisLol.concat(", ")
   end
end

puts("Megszólítások: " + Honorifics.chop.chop)
puts("Barátoknak és családnak: " + PndFD.chop.chop)
puts("Bókok: " + Compliments.chop.chop)
puts("Kapcsolat leírások: " + Rship.chop.chop)
puts("----------------------------------------------------------------------------------------")
puts("Nem preferált kifejezések: " + DontUseThisLol.chop.chop)
puts("----------------------------------------------------------------------------------------")
puts("SUDO#0814 2022")