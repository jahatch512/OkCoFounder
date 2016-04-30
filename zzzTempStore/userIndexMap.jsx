var renderUsers = this.state.users.map(function(user){
  return (<UserIndexItem className="user_index_item"
          key={user.id}
          user={user} />);
});
