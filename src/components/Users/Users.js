import React from 'react'
import Pagination from '../common/Pagination/Pagination'
import User from './User'

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props}) => {
  return (
    <div>
      <Pagination totalUsersCount={totalUsersCount} pageSize={pageSize} currentPage={currentPage}
                  onPageChanged={onPageChanged}/>
      {users.map(user => {
          return (
            <User user={user} key={user.id} followingInProgress={props.followingInProgress}
                  follow={props.follow} unfollow={props.unfollow}/>
          )
        }
      )}
    </div>
  )
}

export default Users