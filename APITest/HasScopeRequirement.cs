using System;
using System.Collections.Generic;
using System.Linq;
using APITest.Models;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
public class HasScopeRequirement : IAuthorizationRequirement {
    public string Issuer { get; }
    public string Scope { get; }

    public HasScopeRequirement (string scope, string issuer) {
        Scope = scope ??
            throw new ArgumentNullException (nameof (scope));
        Issuer = issuer ??
            throw new ArgumentNullException (nameof (issuer));
    }
}