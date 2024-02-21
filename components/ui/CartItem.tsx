import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface CartItemProps {
  item: {
    image: string;
    title: string;
    price: string;
  };
  onPress: () => void;
  onRemove: () => void;
}

const CartItem = ({ item, onPress, onRemove }: CartItemProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{item.price}</Text>
      </View>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.remove}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#d1d1d1',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  content: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 16,
    color: '#646464',
  },
  remove: {
    color: 'red',
    fontSize: 16,
  },
});
