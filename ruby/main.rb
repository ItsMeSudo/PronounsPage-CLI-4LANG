require 'httparty'

puts("Adj meg egy felhasználó nevet: ")
user = gets.chop
url = 'https://pronouns.page/api/profile/get/'+user+'?version=2'
response = HTTParty.get(url)
result = response.parsed_response
puts("Felhasználó: "+result['username'])

IsBanned = ""
DontUseThisLol = ""
OtherWords = ""

if result['bannedReason'] == nil
    IsBanned.concat("Nem")
else
    IsBanned.concat("Igen")
end

puts("Bannolva?: " + IsBanned)


def ifforcycle(input)
   out = ""
   for i in input
      if i['opinion'] == 'yes'
         out.concat(i['value'])
         out.concat(", ")
      elsif i['opinion'] == 'meh'
         out.concat(i['value'])
         out.concat(", ")
      elsif i['opinion'] == 'no'
         DontUseThisLol.concat(i['value'])
         DontUseThisLol.concat(", ")
      else
         OtherWords.concat(i['value'])
         OtherWords.concat(", ")
      end
   end
   return out.chop.chop
end

def defaforcycle(input)
   out = ""
   for i in input
      out.concat(i)
      out.concat(", ")
  end
  return out.chop.chop
end

puts("Névmások: " + ifforcycle(result['profiles']['en']['pronouns']))
puts("Kor: #{result['profiles']['en']['age']}")
puts("Linkek: " + defaforcycle(result['profiles']['en']['links']))
puts("Megadott zászlók: " + defaforcycle(result['profiles']['en']['flags']))
puts("Megszólítások: " + ifforcycle(result['profiles']['en']['words'][0]['values']))
puts("Barátoknak és családnak: " + ifforcycle(result['profiles']['en']['words'][1]['values']))
puts("Bókok: " + ifforcycle(result['profiles']['en']['words'][2]['values']))
puts("Kapcsolat leírások: " + ifforcycle(result['profiles']['en']['words'][3]['values']))
puts("----------------------------------------------------------------------------------------")
puts("Nem preferált kifejezések: " + DontUseThisLol.chop.chop)
puts("Egyéb kifejezések: " + OtherWords.chop.chop)
puts("----------------------------------------------------------------------------------------")
puts("SUDO#0814 2022")