{/* <form v-on:submit.prevent="onSubmit">
<div class="form-group">
  <label for="emailAddress">Email address</label>
  <input v-model="email" type="email" class="form-control" id="emailAddress">
</div>
<div class="form-group">
  <label for="firstName">First Name</label>
  <input v-model="firstName" type="text" class="form-control" id="firstName">
</div>
<div class="form-group">
  <label for="lastName">Last Name</label>
  <input v-model="lastName" type="text" class="form-control" id="lastName">
</div>
<div class="form-group">
  <label for="displayName">Display Name</label>
  <input v-model="displayName" type="text" class="form-control" id="displayName">
</div>
<div class="form-group">
  <label for="school">School</label>
  <select class="form-control" name="school" v-model="school">
    <option selected></option>
    <option v-for="school in schools" :key="school.name" v-bind:value="school['school_id']">{{ school.name }}</option>
  </select>
</div>
<div class="form-group">
  <label for="password">Password</label>
  <input v-model="password" type="password" class="form-control" id="password">
</div>
<div class="form-group">
  <label for="confirmPassword">Confirm Password</label>
  <input v-model="confirmPassword" type="password" class="form-control" id="confirmPassword">
</div>
<div style="color: red;" class="py-2" v-if="errors !== null">
  <h6>Errors:</h6>
  <div v-for="error in errors" v-bind:key="error.msg">
    Error: {{ error.msg }}
  </div>
</div>
<div class="form-group">
  <button type="submit" class="btn btn-block btn-primary">Create User</button>
</div>
</form> */}