import json


file = open('/home/joao/Teste/plantas.json','r')
plantas = json.load(file)
#print(plantas)
i=0
for planta in plantas:
    i+=1
    nome = planta['Especie']
    planta['Especie'] = {"_id":i,"nome":nome}

with open("/home/joao/Teste/plantas.json", "w") as outfile:
    json.dump(plantas, outfile,indent=5)