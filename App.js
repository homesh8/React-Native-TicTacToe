import React, {useState, Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Alert, Button } from 'react-native';
import {MaterialCommunityIcons as Icon} from 'react-native-vector-icons';


export default class App extends Component  {
  state = {
    game : [
      [0,0,0],
      [0,0,0],
      [0,0,0]  
    ],
    player : 1,
    won : 0
  }
  
  onIconPress = (row, column)=>{
    if(this.state.won == 0){
    var a = this.state.game.slice();
    if( a[row][column] == 0 ){
      a[row][column] = this.state.player
      this.setState({game:a})
      this.setState({player :this.state.player*-1})
    }
    var i = 0,sum = 0
    for(i=0;i<3;i++){
      sum = 0
      sum = a[i][0]+a[i][1]+a[i][2]
      this.win(sum)
    }
    for(i=0;i<3;i++){
      sum = 0 
      sum = a[0][i]+a[1][i]+a[2][i]
      this.win(sum)
    }
    sum = 0
    sum = a[0][0]+a[1][1]+a[2][2]
    this.win(sum)
    
    sum = 0
    sum = a[0][2]+a[1][1]+a[2][0]
    this.win(sum)
    }
    else{
      if(this.state.won == 1){
        Alert.alert("player 1 win")
      }else if(this.state.won == -1){
        Alert.alert("player 2 win")
      }
    }
  }

  rest=()=>{
    this.setState({
      game : [
        [0,0,0],
        [0,0,0],
        [0,0,0]  
      ],
      player : 1,
      won : 0
    })
  }

  win = (sum)=>{
    if(sum == 3){
      this.setState({won:this.state.player})
      Alert.alert("player 1 win")
    }else if(sum == -3){
      this.setState({won:this.state.player})
      Alert.alert("player 2 win")
    }
  }

  onGetIcon = (row, column)=>{
   flag = this.state.game[row][column]
   switch(flag){
     case 1 : return <Icon name="close" style={styles.icon} />;
     case -1 : return <Icon name="circle-outline" style={styles.icon0} />
     default: return <View/>
   }
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={{marginBottom:50}}>
          <Text style={{fontSize:25}}>Tic Tac Toe</Text>
        </View>
        <View style={{borderWidth :5}}>
          <View style={{flexDirection : "row"}}>
            <TouchableOpacity onPress={()=>this.onIconPress(0,0)} style={styles.box} >
              {this.onGetIcon(0,0)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onIconPress(0,1)} style={styles.box} >
              {this.onGetIcon(0,1)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onIconPress(0,2)} style={styles.box} >
              {this.onGetIcon(0,2)}
            </TouchableOpacity>
          </View>
    
          <View style={{flexDirection : "row"}}>
            <TouchableOpacity onPress={() => this.onIconPress(1,0)} style={styles.box} >
              {this.onGetIcon(1,0)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onIconPress(1,1)} style={styles.box} >
              {this.onGetIcon(1,1)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onIconPress(1,2)} style={styles.box} >
              {this.onGetIcon(1,2)}
            </TouchableOpacity> 
          </View>
    
          <View style={{flexDirection : "row"}}>
            <TouchableOpacity onPress={() => this.onIconPress(2,0)} style={styles.box} >
              {this.onGetIcon(2,0)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onIconPress(2,1)} style={styles.box} >
              {this.onGetIcon(2,1)}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.onIconPress(2,2)} style={styles.box} >
              {this.onGetIcon(2,2)}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop:100}}>
          <Button title="New Game" onPress={()=> this.rest()} />
        </View>
      </View>
    );
    }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width:100,
    height:100,
    borderWidth:5,
    alignItems: 'center'
  },
  icon :{
    alignItems: 'center',
    color: "red",
    fontSize:80,
    padding:5
  },
  icon0 :{
    alignItems: 'center',
    color: "green",
    fontSize:80,
    padding:5
  }
});
