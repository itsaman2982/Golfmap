import React from 'react';
import { View, StyleSheet, Image ,Text,TouchableOpacity,PanResponder, ScrollView} from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';
import ImagePicker from 'react-native-image-picker';
const App = () => {

  const imageWidth = 408; // Width of the image
  const imageHeight = 612; // Height of the image

  const markers = [
    { x: 200, y: 440 }, // First marker (circle)
    { x: 210, y: 175 }, // Second marker (circle)
    { x: 100, y: 230 }, // Third marker (image)
  ];






  return (

    <View style={styles.container}>

      <View style={styles.leftColumn}>
      <View>
                <Text style={{fontSize:24,color:'black'}}>hello</Text>
              </View>
        <View style={styles.box1}>
<TouchableOpacity style={styles.powderblue} onPress={this.handlePreviousStep}>
<Image style={styles.i1}
            source={require('./Images/check.png')}/>
   </TouchableOpacity>
 <TouchableOpacity style={styles.skyblue} onPress={this.handlePreviousStep}>
          <Text style={{fontSize:16,fontWeight:'bold',color:'white',}}>2</Text>
  </TouchableOpacity>
 <TouchableOpacity style={styles.gray} onPress={this.handlePreviousStep}>
         <Text style={{fontSize:16,fontWeight:'bold',color:'black',}}>3</Text>
  </TouchableOpacity>
   <TouchableOpacity style={styles.gray} onPress={this.handlePreviousStep}>
      <Text style={{fontSize:16,fontWeight:'bold',color:'black',}}>4</Text>
    </TouchableOpacity>

        </View>

        <View style={[styles.box2, { backgroundColor: 'black' }]}>
<Image style={styles.i2}
      source={require('./Images/flag.png')}/>
 <Text style={{color:'white',marginHorizontal:30,marginTop:0,fontSize:36,fontWeight:'bold'}}>184Y</Text>
 <Text style={{color:'white',marginHorizontal:30,marginTop:0,fontSize:20}}>Remain</Text>
        </View>
        <View style={[styles.box3, { backgroundColor: '#E0E3E8' }]}>
  <Image style={styles.i3}
      source={require('./Images/length.png')}/>
      <Text style={{color:'black',marginHorizontal:30,fontSize:36,fontWeight:'bold',}}>12%</Text>
      <Text style={{color:'black',marginHorizontal:30,fontSize:20}}>Plane</Text>
       <Image style={styles.i4}
           source={require('./Images/substract.png')}
           />
  <Image style={styles.i5}
      source={require('./Images/wind.png')}/>
<Text style={{color:'black',marginHorizontal:30,fontSize:36,fontWeight:'bold',}}>5-8</Text>
<Text style={{color:'black',marginHorizontal:30,fontSize:20}}>MPH SE</Text>
                </View>
         <View style={styles.box4}>
          <Image style={styles.i6}
               source={require('./Images/line.png')}/>
                  <Text style={{fontSize:20,marginLeft:40,color:'#2EBB6A'}}>Tip</Text>
                                    <Text style={{fontSize:20,marginLeft:40}}>Golf tracking involves monitoring and recording data like scores, fairways hit, greens in regulation.</Text>

        </View>
        <View style={[styles.box5, { backgroundColor: 'black' }]}>
<TouchableOpacity style={styles.t1}>
 <Image style={styles.i7}
               source={require('./Images/Group.png')}/>
</TouchableOpacity>
 <Text style={{color:'white',fontSize:22,fontWeight:'bold',marginLeft:130,}}>Aman Talaviya       -4       18</Text>
           <Text style={{color:'white',fontSize:20,marginLeft:130,}}>4 HOLES                   Score   HCP</Text>

                </View>
      </View>

      <View style={styles.rightRow}>
        <View style={styles.box}>


           <Image
                  source={require('./Images/cartoon-golf-course-with-trees-grass-removebg-preview.png')} // Replace with your image path
                  style={styles.i8}
                />
                           <Image
                                  source={require('./Images/8918182-removebg-preview.png')}
                                    resizeMode="cover"// Replace with your image path
                                  style={styles.i9}
                                />


                <Svg width={imageWidth} height={imageHeight} style={styles.svg}>
                  {/* Add the First Half-Circle Polyline Path */}


                  {/* Add Circular Markers */}
                  {markers.slice(0, 2).map((marker, index) => (
                    <Circle
                      key={index}
                      cx={marker.x}
                      cy={marker.y}
                      r={8} // Marker radius
                      fill="#84D2Df" // Marker fill color
                      // Marker border width
                    />
                  ))}

                  {/* Add Image Marker */}
                  <Image
                    source={require('./Images/Group.png')} // Replace with your image marker path
                    style={{
                      width: 35, // Image marker width
                      height: 35, // Image marker height
                      left: markers[2].x - 12, // X-coordinate of the image marker
                      top: markers[2].y - 12, // Y-coordinate of the image marker
                    }}
                  />

                  {/* Add the Second Half-Circle Polyline Path */}
                  <Path
                    d="M210,175 A42,100 0 0 0 100,230"
                    fill="none"
                    stroke="#84D2Df" // Line color
                    strokeWidth="4" // Line width

                  />
                  <Path
                    d="M200,440 A40,90 0 0 0 100,230"
                    fill="none"
                    stroke="white" // Line color
                    strokeWidth="4" // Line width

                  />
                </Svg>


        </View>
      </View>

    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Horizontal layout
    justifyContent: 'space-between', // Aligns the left and right boxes to the edges
    marginHorizontal:30,
  },
  leftColumn: {
    flex: 1, // Takes up 2/3 of the available horizontal space
    flexDirection: 'column', // Vertical layout for left boxes
    justifyContent: 'flex-start', // Aligns left boxes to the top
    height:300,
  },
  rightRow: {
    flex: 1, // Takes up 1/3 of the available horizontal space
    flexDirection: 'row', // Horizontal layout for the right box
     justifyContent: 'center',// Aligns right box to the bottom

  },
  box: {
flex:1,
alignItems: 'center',
    justifyContent: 'center',

  },
   box1: {
     flexDirection: 'row',
     margin:30,
     marginLeft:0,
   },
   powderblue: {
      justifyContent:'center',
      alignItems: 'center',
      marginLeft:0,
      margin:20,
      height: 30,
      width:40,
      borderWidth:1.5,
      borderRadius:30,
      borderColor:'#16B55B',
        },
 i1:{
      width:25,
      height:25,
      },

     skyblue:{
     justifyContent:'center',
     alignItems: 'center',
     marginLeft:0,
     margin:20,
     height: 30,
     width:60,
     borderRadius:30,
     backgroundColor:'#16B55B',
     },


     gray:{
     justifyContent:'center',
     alignItems: 'center',
     marginLeft:0,
     margin:20,
     height: 30,
     width:60,
     borderRadius:30,
     backgroundColor:'#E1E4E9',
     },

   box2: {
      width:150,
      height:140,
      borderRadius:30,
      elevation:9,
      marginLeft:0,
      margin:20,
  },
    i2:{
            marginHorizontal:30,
            marginTop:20,
                  width:25,
                  height:25,
                  },
    box3: {
         width:150,
         height:300,
         margin:25,
         marginLeft:0,
         borderRadius:30,
    },
    i3:{
               marginHorizontal:30,
               marginTop:30,
                     width:25,
                     height:25,
                     },
  i4:{
            marginHorizontal:30,
            marginTop:25,
                  width:80,
                  height:5,
                  },
 i5:{
            marginHorizontal:30,
            marginTop:20,
                  width:25,
                  height:25,
                  },

        box4: {

         width:250,
             height:150,
             margin:5,
             marginLeft:0,
             borderRadius:30,
        },
  i6:{
                position:'absolute',
                   width:5,
                   height:150,
                   },

  box5: {

        justifyContent:'center',
         height:120,
         width:430,
         margin:25,
         marginLeft:0,
         borderRadius:40,
    },
     i7:{
       width:80,
       height:80,

       },
       t1:{
       position:'absolute',
       marginLeft:30,
       },

       i8:{
       width:308,
       height:512,
       margin:180,
       marginLeft:150,
       },
        i9:{
        position:'absolute',
              width:212,
              height:158,
              opacity: 0.8,
              },
        svg: {
           position: 'absolute',
         },
});

export default App;
