const { Post } = require('../models');

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    content: 'Donec laoreet pretium arcu sit amet consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam accumsan eleifend quam. Nunc mattis purus risus, vitae fermentum arcu malesuada ut. Praesent ut porta.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Morbi nec velit viverra, lacinia sem sed, commodo ipsum. Ut malesuada mauris ut neque egestas laoreet. Proin pretium blandit tortor aliquam tincidunt. Suspendisse potenti. Proin risus tellus, bibendum sit amet odio vitae, suscipit lacinia elit. Aliquam.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    content: 'Fusce tincidunt efficitur mi, id facilisis augue lacinia sed. Cras rhoncus non dui a pretium. Ut rutrum risus sit amet urna auctor, vitae lobortis eros rutrum. Cras vulputate sodales arcu id sodales. Aliquam aliquam auctor purus.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    content: 'Sed maximus, risus sit amet cursus bibendum, tellus ligula rhoncus mauris, et blandit ante nibh vel nisl. Maecenas ullamcorper eget arcu eu aliquet. Praesent non pretium odio. Nullam porttitor mi sed accumsan volutpat. Suspendisse auctor sed.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    content: 'Donec vehicula magna quis elementum commodo. Nulla imperdiet, leo vel iaculis sollicitudin, ante mi dapibus neque, ac pulvinar nibh sem quis augue. Vestibulum vehicula feugiat egestas. Aliquam commodo nulla risus, in viverra ligula sollicitudin sed. Pellentesque.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nunc eget bibendum elit. Nulla rutrum neque in lacus feugiat, sit amet semper dui ullamcorper.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Ut eu scelerisque massa. Aenean eu dignissim lacus. Maecenas euismod lectus cursus suscipit accumsan. Morbi ut lacinia augue. Nullam at porta sem. Fusce fringilla est sit amet nunc dapibus dictum. In hac habitasse platea dictumst. Duis.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    content: 'Nullam vitae efficitur elit, vitae ornare mi. Aenean augue ante, ullamcorper ut tellus non, egestas rutrum nibh. Praesent varius eu arcu sed vehicula. Pellentesque pharetra hendrerit erat. Aliquam commodo enim sit amet sem ultricies gravida. Ut.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    content: 'Sed ac neque sem. Etiam lobortis mattis elit, ac condimentum enim accumsan quis. Praesent lectus augue, gravida quis rhoncus id, ultrices sit amet lacus. Maecenas sit amet luctus nisi. Phasellus pharetra tellus vitae nisi sodales, id.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    content: 'Integer tellus nunc, varius in accumsan sed, placerat posuere lacus. In tempus, leo scelerisque faucibus fermentum, dolor nunc sodales quam, id porta lacus urna eget enim. Maecenas volutpat rutrum velit a condimentum. Suspendisse pharetra nisl vitae.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Curabitur pharetra felis sit amet leo convallis molestie. Ut tristique justo id justo vulputate, sit amet tempor ligula convallis. Fusce ullamcorper magna ut ligula condimentum, non pharetra ante ornare. Phasellus id bibendum magna. Duis vestibulum lobortis.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    content: 'Nulla id ipsum eu orci dignissim iaculis. Nam vestibulum ipsum vitae lectus scelerisque sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut hendrerit commodo libero vel dignissim. Phasellus vehicula blandit.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    content: 'In porta velit ornare augue tristique, a ornare lacus faucibus. Aliquam sagittis rhoncus nibh ac condimentum. Mauris turpis quam, suscipit in nibh eu, lobortis venenatis libero. Sed ultrices pretium iaculis. Pellentesque ultricies nibh vitae ullamcorper efficitur.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    content: 'Nunc id fringilla est, at rutrum est. Mauris sed condimentum velit. Pellentesque iaculis nunc vel sapien pellentesque, eu tempor augue sagittis. Donec pretium quam sed tellus fermentum, ac aliquet massa tincidunt. Nulla congue elit sed nibh.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    content: 'Donec non consectetur est. Ut ultrices vitae ipsum eget efficitur. Nam et diam a nisl pellentesque tempus. Curabitur bibendum, nisl id tristique malesuada, magna eros congue massa, sed viverra turpis lacus quis lacus. Aenean hendrerit felis.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    content: 'Nunc a suscipit urna. Nam mattis porta libero, in pretium quam tristique non. Nulla facilisi. Aliquam non nulla et purus aliquam rhoncus vel quis nulla. Maecenas aliquet justo sit amet mauris iaculis, at ultrices sapien rhoncus.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    content: 'Etiam eu ipsum scelerisque, auctor enim a, blandit lectus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque euismod, enim id commodo placerat, tellus massa aliquam neque, sit amet tincidunt tellus.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    content: 'In varius dignissim mattis. Fusce mollis ligula felis, nec gravida urna convallis sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse aliquam congue.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    content: 'Curabitur dapibus, sapien non fermentum lobortis, tortor lorem vestibulum felis, quis porta tellus massa in nulla. Integer nisl massa, efficitur ac posuere a, vulputate vitae massa. Etiam sit amet orci non magna porta feugiat eget vitae.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    content: 'Quisque sodales mauris et dui sodales malesuada. Nullam ipsum lorem, pharetra eu tempor vel, posuere nec est. Nam non ante sit amet nisi porta facilisis a vel lorem. Suspendisse eget lacus dui. Fusce et tellus vulputate.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
