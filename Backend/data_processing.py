"""
for(y=0; y<array_encoded.length; y++){
            var encoded_data = decode(array_encoded[y]);
            console.log(encoded_data)
            var pointer = 1
            //reference val
            var lat_ref = encoded_data[0]['lat']
            var lng_ref = encoded_data[0]['lng']
            draw(encoded_data[0], map)
            while (pointer < encoded_data.length-1){
                if (Math.abs(lat_ref - encoded_data[pointer+1]['lat']) < difference || Math.abs(lng_ref - encoded_data[pointer+1]['lng']) < difference){
                    encoded_data.splice(pointer+1,1)
                }else{
                    lat_ref = encoded_data[pointer+1]['lat']
                    lng_ref = encoded_data[pointer+1]['lng']
                    pointer++
                    draw(encoded_data[pointer], map)
                }
            }
            draw(encoded_data[pointer], map)
        }
"""

def analysis(leg):
    test = leg[:]
    #declaring the initial variables
    pointer = 1
    difference = 0.00005
    
    for array_decoded in test:
        lat_ref = array_decoded[0][0]
        lng_ref = array_decoded[0][1]
        while pointer < len(array_decoded)-1:
            if abs(lat_ref - array_decoded[pointer+1][0]) < difference or abs(lng_ref - array_decoded[pointer+1][1]) < difference:
                del array_decoded[pointer+1]
            else:
                lat_ref = array_decoded[pointer+1][0]
                lng_ref = array_decoded[pointer+1][1]
                pointer += 1
        
    return test






