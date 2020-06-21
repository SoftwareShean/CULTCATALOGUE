<Route path="/" exact>
            <Artisthome data={this.state.artist} />
          </Route>
          <Route path="/artist/:id" exact>
            <Artistprofile data={this.state.artist} />
          </Route>
          <Route path="/create-artist" exact>
            <Createpage />
          </Route>