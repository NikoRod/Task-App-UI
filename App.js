// REACT
import React from 'react';
import { Text, View, StatusBar, ScrollView } from 'react-native';

// EXPO
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

const colors = {
  themeColor: '#4263ec',
  white: '#fff',
  background: '#f4f4f4',
  greyish: '#a4a4a4',
  tint: '2b49c3',
  secondary: '#0F66BD',
};

const tasks = [
  {
    task: 'Morning Walk',
    icon: 'hiking',
    theme: '"008b8b',
    stamp: 'Today . 7am'
  },
  {
    task: 'Eat breakfast',
    icon: 'egg-fried',
    theme: '"008b8b',
    stamp: 'Today . 8am'
  },
  {
    task: 'Morning Walk',
    icon: 'hiking',
    theme: '"008b8b',
    stamp: 'Today . 8pm'
  },
  {
    task: 'Morning Walk',
    icon: 'hiking',
    theme: '"008b8b',
    stamp: 'Today . 8pm'
  },
  {
    task: 'Morning Walk',
    icon: 'hiking',
    theme: '"008b8b',
    stamp: 'Today . 8pm'
  },
  {
    task: 'Morning Walk',
    icon: 'hiking',
    theme: '"008b8b',
    stamp: 'Today . 8pm'
  },
];

const Task = ({ task, icon, theme, stamp }) => {

  return (

    <View style={{
      backgroundColor: colors.white,
      flexDirection: 'row',
      marginHorizontal: 16,
      marginVertical: 4,
      borderRadius: 20,
      paddingVertical: 20,
      paddingHorizontal: 24,
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
    >

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>

        <MaterialCommunityIcons
          name={icon}
          size={30}
          style={{ color: theme, marginRight: 5 }}
        />

        <View>
          <Text style={{ fontSize: 16 }}>{task}</Text>
          <Text style={{ color: colors.greyish }}>{stamp}</Text>
        </View>

      </View>

      <View style={{ flexDirection: 'row' }}>

        <MaterialCommunityIcons
          name='pencil'
          size={30}
          style={{ color: theme }}
        />

        <MaterialCommunityIcons
          name='trash-can'
          size={30}
          style={{ color: theme, marginLeft: 5 }}
        />

      </View>

    </View>

  )
};

export default function App(props) {

  return (

    <View
      style={{
        flex: 1,
        backgroundColor: colors.themeColor,
      }}
    >

      <StatusBar barStyle='light-content' backgroundColor={colors.themeColor} />

      <View style={{ backgroundColor: colors.themeColor }}>

        <View style={{
          padding: 16,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        >

          <MaterialCommunityIcons
            name='text'
            size={30}
            style={{ color: colors.white }}
          />

          <View style={{ flexDirection: 'row' }}>

            <MaterialCommunityIcons
              name='bell-outline'
              size={30}
              style={{ color: colors.white }}
            />

            <AntDesign
              name='user'
              size={30}
              style={{ color: colors.white }}
            />

          </View>

        </View>

        <View style={{ padding: 16 }}>

          <Text style={{ color: colors.white, fontSize: 30 }}>{'Hello, Guest'}</Text>

          <View style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: colors.secondary,
            borderRadius: 50,
            marginVertical: 20,
            alignItems: 'center',

          }}
          >
            <MaterialCommunityIcons
              name='magnify'
              size={30}
              style={{ color: colors.white }}
            />

            <View style={{ flexDirection: 'row' }}>

              <MaterialCommunityIcons
                name='microphone'
                size={30}
                style={{ color: colors.white }}
              />

              <MaterialCommunityIcons
                name='tune'
                size={30}
                style={{ color: colors.white }}
              />

            </View>

          </View>

        </View>

      </View>

      <View style={{
        padding: 20,
        flexDirection: 'row',
        backgroundColor: colors.background,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      }}
      >
        <Text style={{ fontSize: 24 }}>Tasks</Text>
        <MaterialCommunityIcons
          name='plus'
          size={40}
          style={{
            color: colors.themeColor,
            backgroundColor: colors.white,
            borderRadius: 20,
            marginHorizontal: 8,
          }}
        />
      </View>

      <ScrollView style={{ backgroundColor: colors.background }}>
        {tasks.map(task => (
          <Task
            task={task.task}
            icon={task.icon}
            theme={task.theme}
            stamp={task.stamp}
          />
        ))}
      </ScrollView>

    </View>

  );
}