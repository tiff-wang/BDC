module.exports = {

    encodeData: function(patient, callback) {
        /**
         * features = ['fff', 'fff', 'fff' ... 'ff_1000']
         * encoding = [1, 0, 1, 1 ... 0 ]
         *
         *
         */
        var features = ["54d2d4c724c0e6934ac08bf4", "54d2d4c824c0e6934ac0b425", "54d2d4c824c0e6934ac0ba4a", "54d2d4cb24c0e6934ac0f458", "54d2d4cc24c0e6934ac138e1", "55f9d8c7504e21a742589668", "55f9d8c7504e21a74258966a", "5602fac336a131c66d9a4c0c", "5602fac336a131c66d9a4c19", "5602fb9163f45d536e369c03", "5602fc3076c450b96e51f644", "5602fc3076c450b96e51f64e", "5602fc3076c450b96e51f657", "560446df5b89b83c28ed0618", "560446df5b89b83c28ed061f", "563d0c804e2296eb17d76830", "563d0c804e2296eb17d76831", "563d0c804e2296eb17d76833", "563d0c804e2296eb17d7683c", "563d0c814e2296eb17d7684c", "563d0c814e2296eb17d76853", "563d0c814e2296eb17d7685a", "5640be3f79cf2ade4c11118a", "5640be3f79cf2ade4c11118c", "5640be3f79cf2ade4c111192", "5640be3f79cf2ade4c111193", "5640be3f79cf2ade4c1111b7", "5640be3f79cf2ade4c1111b8", "5640cedf359a48765765ed68", "5640ceea359a48765765ed69", "5640d18b359a48765765ed71", "5640d19a359a48765765ed72", "5640d1b8359a48765765ed74", "5640d1c5359a48765765ed75", "5640d3c2359a48765765ed84", "5640d3ce359a48765765ed85", "5640d852cfbd4fb45d074854", "5640d85fcfbd4fb45d074855", "5640ec07cfbd4fb45d074861", "5640ec15cfbd4fb45d074862", "5640ec21cfbd4fb45d074863", "5640ecd4cfbd4fb45d07486a", "5640ece1cfbd4fb45d07486b", "5640ecf1cfbd4fb45d07486c", "5640f599cfbd4fb45d074876", "5640f5c7cfbd4fb45d074879", "5640f5d9cfbd4fb45d07487a", "5640f5e9cfbd4fb45d07487b", "5640f621cfbd4fb45d07487d", "5640f62ccfbd4fb45d07487e", "5640fecacfbd4fb45d07489f", "5640fedecfbd4fb45d0748a1", "5640ff6fcfbd4fb45d0748a9", "5640ff78cfbd4fb45d0748aa", "5640ff82cfbd4fb45d0748ab", "56425914016b16f014fe019d", "56425914016b16f014fe01a3", "56425914016b16f014fe01aa", "56425914016b16f014fe01ae", "56425914016b16f014fe01b7", "56425915016b16f014fe01b8", "56425915016b16f014fe01c4", "56425915016b16f014fe01ca", "56425915016b16f014fe0207", "56425915016b16f014fe0215", "56425915016b16f014fe0244", "565ddd075202d1347867580e", "565ddd075202d1347867580f", "565ddd075202d13478675810", "565ddd075202d13478675811", "565ddd075202d13478675812", "565ddd075202d13478675813", "565ddd075202d13478675815", "565ddd075202d13478675817", "565ddd075202d13478675818", "565ddd075202d13478675819", "565ddd075202d1347867581a", "565ddd075202d1347867581b", "565ddd075202d1347867581c", "565ddd075202d1347867581e", "565ddd075202d1347867581f", "565ddd075202d13478675820", "565ddd075202d13478675822", "565ddd075202d13478675824", "565ddd075202d13478675825", "565ddd075202d13478675826", "565ddd075202d13478675827", "565ddd075202d13478675828", "565ddd075202d13478675829", "565ddd075202d1347867582a", "565ddd075202d1347867582b", "565ddd075202d1347867582c", "565ddd075202d1347867582d", "565ddd075202d1347867582e", "565ddd075202d1347867582f", "565ddd075202d13478675830", "565ddd075202d13478675831", "565ddd075202d13478675834", "565ddd075202d13478675835", "565ddd075202d13478675836", "565ddd075202d13478675837", "565ddd075202d13478675838", "565ddd075202d1347867583a", "565ddd075202d1347867583b", "565ddd075202d1347867583c", "565ddd075202d1347867583d", "565ddd075202d1347867583e", "565ddd075202d1347867583f", "565ddd075202d13478675840", "565ddd075202d13478675841", "565ddd075202d13478675842", "565ddd075202d13478675843", "565ddd075202d13478675844", "565ddd075202d13478675845", "565ddd075202d13478675846", "565ddd075202d13478675847", "565ddd075202d13478675849", "565ddd075202d1347867584a", "565ddd075202d1347867584b", "565ddd075202d1347867584c", "565ddd075202d1347867584d", "565ddd075202d1347867584f", "565ddd075202d13478675850", "565ddd075202d13478675853", "565ddd075202d13478675854", "565ddd075202d13478675855", "565ddd075202d13478675856", "565ddd075202d13478675857", "565ddd075202d13478675858", "565ddd075202d1347867585a", "565ddd075202d1347867585b", "565ddd075202d1347867585c", "565ddd075202d1347867585d", "565ddd075202d1347867585f", "565ddd075202d13478675862", "565ddd075202d13478675863", "565ddd075202d13478675865", "565ddd075202d13478675866", "565ddd075202d13478675867", "565ddd075202d13478675868", "565ddd075202d13478675869", "565ddd075202d1347867586a", "565ddd075202d1347867586b", "565ddd075202d1347867586d", "565ddd075202d1347867586e", "565ddd075202d1347867586f", "565ddd075202d13478675870", "565ddd075202d13478675873", "565ddd075202d13478675874", "565ddd075202d13478675875", "565ddd075202d1347867588b", "565ddd075202d1347867588c", "5668a7bb2343a13447dca04b", "5671da55f310bf51068561ab", "5671da55f310bf51068561ac", "5696c868657d42f568eb50a8", "56bdf868b483db47594f6290", "56be4ae719d0874c6b6ef57f", "56e08fa619b97cbf053bfc36", "56e98f0a55d0d28911a9e9d0", "56e98f3655d0d28911a9e9d1", "57445870e2a8890239184b79", "57445870e2a8890239184b7a", "57445870e2a8890239184b7b", "57445870e2a8890239184b7d", "57445870e2a8890239184b7e", "57445870e2a8890239184b7f", "57445870e2a8890239184b80", "57445870e2a8890239184b81", "57445870e2a8890239184b82", "57445870e2a8890239184b83", "57445870e2a8890239184b84", "57445870e2a8890239184b85", "57445870e2a8890239184b86", "57445870e2a8890239184b87", "57445870e2a8890239184b88", "57445870e2a8890239184b89", "57445870e2a8890239184b8a", "57445870e2a8890239184b8b", "57445870e2a8890239184b8c", "57445870e2a8890239184b8d", "57445870e2a8890239184b8e", "57445870e2a8890239184b90", "57445870e2a8890239184b91", "57445870e2a8890239184b92", "57445870e2a8890239184b93", "57445870e2a8890239184b94", "57445870e2a8890239184b95", "57445870e2a8890239184b96", "57445870e2a8890239184b97", "57445870e2a8890239184b98", "57445870e2a8890239184b99", "57445870e2a8890239184b9a", "57445870e2a8890239184b9b", "57445870e2a8890239184b9c", "57445870e2a8890239184b9d", "57445870e2a8890239184b9e", "57445870e2a8890239184b9f", "57445870e2a8890239184ba0", "57445870e2a8890239184ba1", "57445870e2a8890239184ba2", "57445870e2a8890239184ba3", "57445870e2a8890239184ba4", "57445870e2a8890239184ba5", "57445870e2a8890239184ba6", "57445870e2a8890239184ba7", "57445870e2a8890239184ba8", "57445870e2a8890239184ba9", "57445870e2a8890239184baa", "57445870e2a8890239184bab", "57445870e2a8890239184bac", "57445870e2a8890239184bad", "57445870e2a8890239184bae", "57445870e2a8890239184baf", "57445870e2a8890239184bb0", "57445870e2a8890239184bb2", "57445870e2a8890239184bb3", "57445870e2a8890239184bb4", "57445870e2a8890239184bb5", "57445870e2a8890239184bb6", "57445870e2a8890239184bb7", "57445870e2a8890239184bb8", "57445870e2a8890239184bb9", "57445870e2a8890239184bba", "57445870e2a8890239184bbb", "57445870e2a8890239184bbc", "57445870e2a8890239184bbd", "57445870e2a8890239184bbe", "57445870e2a8890239184bbf", "57445870e2a8890239184bc0", "57445870e2a8890239184bc1", "57445870e2a8890239184bc2", "57445870e2a8890239184bc3", "57445870e2a8890239184bc4", "57445870e2a8890239184bc5", "57445870e2a8890239184bc6", "57445870e2a8890239184bc7", "57445870e2a8890239184bc8", "57445870e2a8890239184bc9", "57445870e2a8890239184bca", "57445870e2a8890239184bcb", "57445870e2a8890239184bcc", "57445870e2a8890239184bcd", "57445870e2a8890239184bce", "57445870e2a8890239184bcf", "57445870e2a8890239184bd0", "57445870e2a8890239184bd1", "57445870e2a8890239184bd2", "57445870e2a8890239184bd3", "57445870e2a8890239184bd4", "57445870e2a8890239184bd5", "57445870e2a8890239184bd6", "57445870e2a8890239184bd7", "57445870e2a8890239184bd8", "57445870e2a8890239184bd9", "57445870e2a8890239184bda", "57445870e2a8890239184bdb", "57445870e2a8890239184bdc", "57445870e2a8890239184bdd", "57445870e2a8890239184bde", "57445870e2a8890239184be1", "57445870e2a8890239184be3", "57445870e2a8890239184be4", "57445870e2a8890239184be5", "57445870e2a8890239184be6", "57445870e2a8890239184be7", "57445870e2a8890239184be8", "57445870e2a8890239184be9", "57445870e2a8890239184bea", "57445870e2a8890239184beb", "57445870e2a8890239184bec", "57445870e2a8890239184bee", "57445870e2a8890239184bef", "57445870e2a8890239184bf0", "57445870e2a8890239184bf1", "57445870e2a8890239184bf2", "57445870e2a8890239184bf3", "57445870e2a8890239184bf4", "57445870e2a8890239184bf5", "57445870e2a8890239184bf6", "57445870e2a8890239184bf7", "57445870e2a8890239184bf8", "57445870e2a8890239184bf9", "57445870e2a8890239184bfa", "57445870e2a8890239184bfb", "57445870e2a8890239184bfc", "57445870e2a8890239184bfd", "57445870e2a8890239184bfe", "57445870e2a8890239184bff", "57445870e2a8890239184c00", "57445870e2a8890239184c02", "57445870e2a8890239184c03", "57445870e2a8890239184c04", "57445870e2a8890239184c05", "57445870e2a8890239184c06", "57445870e2a8890239184c07", "57445870e2a8890239184c08", "57445870e2a8890239184c09", "57445870e2a8890239184c0a", "57445870e2a8890239184c0b", "57445870e2a8890239184c0c", "57445870e2a8890239184c0d", "57445870e2a8890239184c0e", "57445870e2a8890239184c0f", "57445870e2a8890239184c10", "57445870e2a8890239184c11", "57445870e2a8890239184c12", "57445870e2a8890239184c13", "57445870e2a8890239184c14", "57445870e2a8890239184c15", "57445870e2a8890239184c16", "57445870e2a8890239184c17", "57445870e2a8890239184c18", "57445870e2a8890239184c19", "57445870e2a8890239184c1a", "57445870e2a8890239184c1b", "57445870e2a8890239184c1c", "57445870e2a8890239184c1d", "57445870e2a8890239184c1e", "57445870e2a8890239184c1f", "57445870e2a8890239184c20", "57445870e2a8890239184c21", "57445870e2a8890239184c22", "57445870e2a8890239184c23", "57445870e2a8890239184c25", "57445870e2a8890239184c26", "57445870e2a8890239184c27", "57445870e2a8890239184c28", "57445870e2a8890239184c29", "57445870e2a8890239184c2a", "57445870e2a8890239184c2b", "57445870e2a8890239184c2c", "57445870e2a8890239184c2d", "57445870e2a8890239184c2e", "57445870e2a8890239184c2f", "57445870e2a8890239184c30", "57445870e2a8890239184c31", "57445870e2a8890239184c32", "57445870e2a8890239184c33", "57445870e2a8890239184c35", "57445870e2a8890239184c37", "57445870e2a8890239184c38", "57445870e2a8890239184c39", "57445c5900c3c62d3dba370e", "57445c5900c3c62d3dba3710", "57445c5900c3c62d3dba3711", "57445c5900c3c62d3dba3712", "57445c5900c3c62d3dba3716", "57445c5900c3c62d3dba3718", "57445c5900c3c62d3dba371a", "57445c5900c3c62d3dba371b", "57445c5900c3c62d3dba371d", "57445c5900c3c62d3dba3724", "57445c5900c3c62d3dba3727", "57445c5900c3c62d3dba3728", "57445c5900c3c62d3dba3729", 
                        "57445c5900c3c62d3dba372b", "57445c5900c3c62d3dba3730", "57445c5900c3c62d3dba3732", "57445c5900c3c62d3dba3733", "57445c5900c3c62d3dba3734", "57445c5900c3c62d3dba3736", "57445c5900c3c62d3dba3739", "57445c5900c3c62d3dba373a", "57445c5900c3c62d3dba373b", "57445c5900c3c62d3dba3741", "57445c5900c3c62d3dba3743", "57445c5900c3c62d3dba3744", "57445c5900c3c62d3dba3745", "57445c5900c3c62d3dba3746", "57445c5900c3c62d3dba3747", "57445c5900c3c62d3dba3748", "57445c5900c3c62d3dba374a", "57445c5900c3c62d3dba374b", "57445c5900c3c62d3dba374d", "57445c5900c3c62d3dba374e", "57445c5900c3c62d3dba374f", "57445c5900c3c62d3dba3750", "57445c5900c3c62d3dba3751", "57445c5900c3c62d3dba3752", "57445c5900c3c62d3dba3753", "57445c5900c3c62d3dba3754", "57445c5900c3c62d3dba3755", "57445c5900c3c62d3dba3756", "57445c5900c3c62d3dba3757", "57445c5900c3c62d3dba3758", "57445c5900c3c62d3dba3759", "57445c5900c3c62d3dba375a", "57445c5900c3c62d3dba375b", "57445c5900c3c62d3dba375d", "57445c5900c3c62d3dba375e", "57445c5900c3c62d3dba375f", "57445c5900c3c62d3dba3760", "57445c5900c3c62d3dba3762", "57445c5900c3c62d3dba3763", "57445c5900c3c62d3dba3764", "57445c5900c3c62d3dba3765", "57445c5900c3c62d3dba3766", "57445c5900c3c62d3dba3767", "57445c5900c3c62d3dba3768", "57445c5900c3c62d3dba3769", "57445c5900c3c62d3dba376b", "57445c5900c3c62d3dba376c", "57445c5900c3c62d3dba376d", "57445c5900c3c62d3dba376f", "57445c5900c3c62d3dba3771", "57445c5900c3c62d3dba3772", "57445c5900c3c62d3dba3773", "57445c5900c3c62d3dba3774", "57445c5900c3c62d3dba3775", "57445c5900c3c62d3dba3776", "57445c5900c3c62d3dba3777", "57445c5900c3c62d3dba3778", "57445c5900c3c62d3dba3779", "57445c5900c3c62d3dba377b", "57445c5900c3c62d3dba377c", "57445c5900c3c62d3dba377d", "57445c5900c3c62d3dba377e", "57445c5900c3c62d3dba377f", "57445c5900c3c62d3dba3780", "57445c5900c3c62d3dba3782", "57445c5900c3c62d3dba3783", "57445c5900c3c62d3dba3784", "57445c5900c3c62d3dba3785", "57445c5900c3c62d3dba3789", "57445c5900c3c62d3dba378a", "57445c5900c3c62d3dba378b", "57445c5900c3c62d3dba378c", "57445c5900c3c62d3dba378d", "57445c5900c3c62d3dba378e", "57445c5900c3c62d3dba378f", "57445c5900c3c62d3dba3793", "57445c5900c3c62d3dba3796", "57445c5900c3c62d3dba3798", "575974714fde3b0d749ad633", "575ad4f2062e268d273269fd", "575ad528062e268d273269fe", "575ad53d0f20d77327707bbf", "5768564af376869158181c0e", "5768564af376869158181c0f", "5768564af376869158181c12", "5768564af376869158181c13", "5768564af376869158181c14", "5768564af376869158181c15", "5768564af376869158181c18", "5768564af376869158181c19", "5768564af376869158181c1a", "5768564af376869158181c1b", "5768564af376869158181c1c", "5768564af376869158181c1d", "5768564af376869158181c1e", "5768564af376869158181c20", "5768564af376869158181c21", "5768564af376869158181c22", "576ab3598f8b963e37d80316", "577131beee5673aa4c474076", "577131ce040c62be369066f3", "5771321aee5673aa4c474078", "5771322bee5673aa4c474079", "57713271040c62be369066f4", "57713294040c62be369066f5", "577132a1ee5673aa4c47407c", "577132dd040c62be369066f7", "577132f1040c62be369066f8", "57713586040c62be369066fc", "577135b2ee5673aa4c47407d", "577135bd040c62be369066fd", "577135cbee5673aa4c47407e", "577135ed040c62be369066fe", "577135f8ee5673aa4c47407f", "57713603ee5673aa4c474080", "57d9eec4469722aa3f641ff2", "57d9f0e5378298c43f51d664", "57d9f9b8378298c43f51d668", "57da0805469722aa3f642000", "57da0893469722aa3f642002", "57da0b12469722aa3f642005", "57da0b86378298c43f51d673", "57dc5e3290ea00237685b2d8", "57e084c6a4828462157d8a42", "57e0860f5fac3d4815a159ca", "57e18849832dc23a27dd0927", "57e18849832dc23a27dd0928", "57e18849832dc23a27dd0929", "57e18849832dc23a27dd092b", "57e18849832dc23a27dd092c", "57e18849832dc23a27dd092f", "57e3d708832dc23a27dd09d9", "57e3f670b80da792276b121d", "57e3f6e8b80da792276b1222", "57e40b056f75e5be42bfde5e", "57e40b056f75e5be42bfde5f", "57e40b056f75e5be42bfde60", "57e40b056f75e5be42bfde61", "57e40b056f75e5be42bfde62", "57e40b056f75e5be42bfde63", "57e40b056f75e5be42bfde64", "57e40b056f75e5be42bfde65", "57e40b056f75e5be42bfde66", "57e40b056f75e5be42bfde67", "57e40b056f75e5be42bfde68", "57e40b056f75e5be42bfde69", "57e40b056f75e5be42bfde6a", "57e40b056f75e5be42bfde6b", "57e40b056f75e5be42bfde6c", "57e40b056f75e5be42bfde6d", "57e40b056f75e5be42bfde6e", "57e40b056f75e5be42bfde6f", "57e40b056f75e5be42bfde70", "57e40b056f75e5be42bfde71", "57e40b056f75e5be42bfde72", "57e40b056f75e5be42bfde73", "57e40b056f75e5be42bfde74", "57e40b056f75e5be42bfde75", "57e40b056f75e5be42bfde76", "57e40b056f75e5be42bfde77", "57e40b056f75e5be42bfde78", "57e40b056f75e5be42bfde7a", "57e40b056f75e5be42bfde7b", "57e40b056f75e5be42bfde7c", "57e40b056f75e5be42bfde7d", "57e40b056f75e5be42bfde7e", "57e40b056f75e5be42bfde7f", "57e40b056f75e5be42bfde80", "57e40b056f75e5be42bfde81", "57e40b056f75e5be42bfde82", "57e40b056f75e5be42bfde83", "57e40b056f75e5be42bfde84", "57e40b056f75e5be42bfde85", "57e568e5cc31889045ffa50f", "57e56f41cc31889045ffa515", "57e57ade8a37fcaa45ad6e77", "57e57ea18a37fcaa45ad6e79", "57e58b728a37fcaa45ad6e80", "57e59050cc31889045ffa518", "57ea76e5161a8c8d018fa197", "57ebdf86c38db33f3cebee0f", "57ee5ec8e6eb621276deca84", "57ee5ec8e6eb621276deca85", "57ee5ec8e6eb621276deca89", "57ee5ec8e6eb621276deca8a", "57ee5ec8e6eb621276deca8b", "57ee6447e40a3ebb538e37c7", "57ee6447e40a3ebb538e37c8", "57ee7a7be40a3ebb538e37ce", "57ee858fb1b220d553c4736c", "57ee8661b00d063b0a601a1a", "57ee86d2a58bc6020a5f2f22", "57ee88d6b00d063b0a601a1c", "57ee894eb00d063b0a601a1f", "57ee8b28a58bc6020a5f2f27", "57ee99ada58bc6020a5f2f32", "57ee9df3a58bc6020a5f2f35", "57ee9e9ab00d063b0a601a2f", "57ee9f7fa58bc6020a5f2f37", "57eec09201e569105e2cd088", "57eec15f01e569105e2cd08b", "57eec1f001e569105e2cd08d", "57eec37b4b3d1add65102241", "57eec3e1857580c36531a2e5", "57f2531c4b3d1add65102248", "57f257994b3d1add65102251", "57f274084b3d1add6510225b", "57f275924b3d1add6510225d", "57f27622857580c36531a305", "57f27694e0f7222770b36750", "57f276fde0f7222770b36752", "57f27849e0f7222770b36754", "57f2787cee9bccc7728d98f3", "57f279dcee9bccc7728d98f6", "57f27fa7e0f7222770b3675b", "57f27ff5ee9bccc7728d98ff", "57f280d2ee9bccc7728d9901", "57f28113ee9bccc7728d9903", "57f2815bee9bccc7728d9906", "57f281d4ba8e2b4301b29b95", "57f298d1ba8e2b4301b29b9a", "57ffb428748cd6b750a823be", "57ffb428748cd6b750a823bf", "57ffb428748cd6b750a823c1", "57ffbdea748cd6b750a823c3", "57ffc65d1dc69e87676a97a6", "57ffd1de9d0328a367251ae1", "57fff5ab9d0328a367251af2", "58010d8ba19c5c8957b8f8d4", "58010d8ba19c5c8957b8f8d5", "58010e4969ca66a3577eeb35", "58010e4969ca66a3577eeb36", "58010e4969ca66a3577eeb37", "58010e4969ca66a3577eeb38", "5804de0e7269c8782fdc66ce", "5804de697269c8782fdc66d0", "5804df157269c8782fdc66d4", "5804dffe3f2c015e2fc06635", "5805170c6e2f3c1569c20788", "5805170c6e2f3c1569c2078a", "5805170c6e2f3c1569c2078c", "5805170c6e2f3c1569c2078d", "5805170c6e2f3c1569c2078f", "5805170c6e2f3c1569c20791", "5805170c6e2f3c1569c20792", "5805170c6e2f3c1569c20793", "5805170c6e2f3c1569c20794", "5805170c6e2f3c1569c20795", "5805170c6e2f3c1569c20796", "5805170c6e2f3c1569c20797", "580524f522e72b5d7b08a175", "5805284c6e2f3c1569c207ad", "5805324d6e2f3c1569c207b5", "580532eb6e2f3c1569c207b9", "5805335f22e72b5d7b08a183", "580584637801bf0b6a7d502f", "580586db7801bf0b6a7d5031", "580589157801bf0b6a7d5033", "580589ec22e72b5d7b08a1a1", "580900b8e36c3b7646324ddb", "580900b8e36c3b7646324ddc", "5809066bd32b359046a52698", "5809228ab3a91427723f1a1f", "58092399b3a91427723f1a22", "580924dad245ab417281e004", "58092bbacb73e76b07fa32d8", "580b747491435c22730ce56a", "580b7e3591435c22730ce56c", "580e18f991435c22730ce584", "580e415b6cc807051a0daa29", "580e482f6cc807051a0daa2b", "580e48adb46a08eb19b5b03f", "580e4f866cc807051a0daa31", "580e57a0b46a08eb19b5b04d", "580e5812b46a08eb19b5b04f", "580f4a48f694e5b46a4f680b", "580f639de9ff4d9a6a670d34", "580f7534c993dab17247c86c", "580f7a28c993dab17247c873", "580f7d7a4cbb2f685cdf6505", "580fabc64cbb2f685cdf6512", "580fad014cbb2f685cdf6514", "58109893c37c95df5428f144", "5810ce9efc77d303459c5353", "5810d831e88add4f021db7ae", "5810f1bc429fa0ce27b2346b", "58110cc14b7e038e302937b4", "58110d524b7e038e302937b6", "58110d9f45ad22e82739235b", "58110e734b7e038e302937b9", "58110ea04b7e038e302937bb", "5811133a5f8ffa064be05dcf", "5811151e5f8ffa064be05dd1", "58134c5745806857641c4f03", "5813aec4dc2898a7396a51ed", "5813aec4dc2898a7396a51ee", "58189c8adc2898a7396a523f", "5818ae9cb1c9e74613c0768f", "5818b906ec02a18c13fc5e6a", "5818bec9e8d30db61bdbd8ee", "5819e6fbe8d30db61bdbd906", "5819ffd4e8d30db61bdbd90d", "581ca50a12ec7d583adb6114", "581ca50a12ec7d583adb6115", "581ca50a12ec7d583adb6116", "581ca50a12ec7d583adb6117", "581ca50a12ec7d583adb6119", "581cac1bce676f623a41e303", "581ceccfce676f623a41e316", "58223b16bac2ed531447c8ff", "5822710954518e027a77be52", "5822807054518e027a77be58", "5822843f54518e027a77be5a", "5822848354518e027a77be5c", "58228b2354518e027a77be60", "5823e76e31b66d6d04fd5e0d", "582490a431b66d6d04fd5e11", "5824c7cd31b66d6d04fd5e15", "5824c83731b66d6d04fd5e17", "5824e578b2eba5087da46b7c", "5824e753b2eba5087da46b82", "5826236fd24d4d8e2b4dea2c", "58262a81612b28c85b27a2e2", "58291df77114ae195c6ff60e", "5829c17816fd4be35bf79047", "582a0a2816fd4be35bf79052", "582a1d087114ae195c6ff621", "582a25f1612b28c85b27a2fa", "582bada27114ae195c6ff63c", "582c589a8ad92dbd3e4d6c58", "582c7f10537546173f63db22", "582c998c314654c60b72ae94", "582cc88b8957488e701f3b51", "582e2c088957488e701f3b71", "582f47379281d98370e54092", "582fa4ab7d677a831efd4f25", "582fa8881fcb9e0471d039fd", "5833158c7d677a831efd4f2c", "5833158c7d677a831efd4f2d", "5833158d7d677a831efd4f2e", "583339e87d677a831efd4f4a", "58333cec7d677a831efd4f4c", "583359650e5bfb9445ea0adc", "58335abfadb21b2e459d1aff", "583463a40e5bfb9445ea0aee", "58349d9d0e5bfb9445ea0af5", "58349dcb30988523452a3607", "58349f083171e779458cc684", "5834ab5fce36440d7a1b51f3", "5838bd190914d78724fbbe0d", "5838c05d0ee7476c241953d4", "5838cddd17a020362408865e", "583e3389633a5f136dffd33b", "583e3592633a5f136dffd33d", "5840cbb3109f93364c1f3ad5", "5840cd31109f93364c1f3ad7", 
                        "5840d018fd4ab5f94b43ff3f", "5840de86109f93364c1f3ade", "58418ead5b49e7514c679678", "58418ead5b49e7514c679679", "58418ead5b49e7514c67968a", "58418ead5b49e7514c679691", "58418ead5b49e7514c679692", "58418ead5b49e7514c679693", "58418ead5b49e7514c679694", "58418ead5b49e7514c679695", "5841db42109f93364c1f3af7", "58456d2b0e25586c4c314351", "58457137109f93364c1f3b1c", "584572585b49e7514c6796d1", "5845739a5b49e7514c6796d4", "58457d6c109f93364c1f3b25", "584582c6109f93364c1f3b29", "584582f4109f93364c1f3b2b", "584583c65b49e7514c6796dd", "58505708b42465d74279971d", "58505725d1189b251d57dbc4", "58505725d1189b251d57dbca", "58505b48b42465d742799732", "585062adc714d45443cff03a", "5850b6bfc714d45443cff043", "5852047076a0299c70d7c5dd", "5852fc33ec5f116f6d9a3136", "585303bc648f3b396de91f3b", "58580cefefe003916819fbd9", "58582b89efe003916819fbfd", "58583498efe003916819fc01", "58583ad5887063ac68a06070", "58584160efe003916819fc12", "585963f08664c44469c8f893", "58641e96f1502695356fb770", "58647c8af1502695356fb788", "586480204faf8e5f353d3457", "586d1c4189b7187504df4bac", "586d218789b7187504df4bb1", "586d23cd89b7187504df4bb6", "5876709f1032263714511f7e", "5877e89b0b205be67319ba6f", "5877f0231032263714511fae", "5877f34c2ef4ae5214195b64", "5877f50e2ef4ae5214195b67", "5877f9ab1032263714511fb4", "587805540b205be67319ba80", "5880cfb0f243ee9a7ac677be", "5880ed3b74880ff92b21bd6b", "5881046e74880ff92b21bd74", "588a682c980cbe2464f626a8", "588b8a92ff3cb90964231271", "588bc1f0ff3cb9096423127e", "588bfd6aff3cb90964231283", "588bfe41ff3cb90964231285", "588c02547e1d3f7d764a1f7d", "588c0505de818a3f64d5e38b", "588fcbacf94cbaa548e39105", "5894978c2396f8f760f8b524", "58949eb6d070691261082d9b", "5898dd8a9feb21c67b15df4b", "5898dd8a9feb21c67b15df4c", "5898dd8a9feb21c67b15df4d", "5898dd8a9feb21c67b15df4e", "5898dd8a9feb21c67b15df4f", "5898dd8a9feb21c67b15df50", "5898dd8a9feb21c67b15df51", "5898dd8a9feb21c67b15df52", "5898dd8a9feb21c67b15df53", "5898dd8a9feb21c67b15df55", "5898dd8a9feb21c67b15df56", "5898dd8a9feb21c67b15df57", "5898dd8a9feb21c67b15df58", "5898dd8a9feb21c67b15df59", "5898dd8a9feb21c67b15df5a", "5898dd8a9feb21c67b15df5b", "5898dd8a9feb21c67b15df5d", "5898dd8a9feb21c67b15df5e", "5898dd8a9feb21c67b15df5f", "5898dd8a9feb21c67b15df60", "5898dd8a9feb21c67b15df62", "5898dd8a9feb21c67b15df63", "5898dd8a9feb21c67b15df64", "5898dd8a9feb21c67b15df65", "5898dd8a9feb21c67b15df66", "5898dd8a9feb21c67b15df67", "5898dd8a9feb21c67b15df69", "5898dd8a9feb21c67b15df6a", "5898dd8a9feb21c67b15df6b", "5898dd8a9feb21c67b15df6c", "5898dd8a9feb21c67b15df6d", "5898dd8a9feb21c67b15df6f", "5898dd8a9feb21c67b15df70", "5898dd8a9feb21c67b15df71", "5898e6349feb21c67b15df80", "5898e6349feb21c67b15df82", "5898e6349feb21c67b15df83", "5898e6349feb21c67b15df84", "5898e65ff0721c907b87eb7a", "5898e660f0721c907b87eb7c", "5898e660f0721c907b87eb7d", "5898e660f0721c907b87eb7e", "5898e660f0721c907b87eb7f", "5898e660f0721c907b87eb81", "5898e660f0721c907b87eb83", "5898ed0902da9dab7ba00ffd", "5898ed84f0721c907b87eb97", "5898ede89feb21c67b15df97", "5898eea9f0721c907b87eb99", "5898f37df0721c907b87eb9b", "5898f55c9feb21c67b15df9b", "5899586b9feb21c67b15dfa1", "589960929feb21c67b15dfa6", "5899633ff0721c907b87eba8", "589a22d59feb21c67b15dfad", "589a25823f9a8dfe630b7d51", "589a27489feb21c67b15dfb1", "589a2a059feb21c67b15dfb4", "589c8fd81fb4000b038a2552", "589c904a1fb4000b038a2554", "589c91906e7390d202914f50", "589c95b86e7390d202914f57", "589c965ba4d5e1ea618d67cc", "589c9774a4d5e1ea618d67cf", "589ca4326e7390d202914f5a", "589ca606a4d5e1ea618d67d1", "589ca6551fb4000b038a255f", "589ca6701fb4000b038a2561", "589ca6eb1fb4000b038a2563", "589ca9701fb4000b038a2566", "589cab8d6e7390d202914f60", "589ccced1fb4000b038a256d", "589cda1be7671496201e5b48", "589cda1be7671496201e5b49", "589cda1be7671496201e5b4a", "589ce30ee7671496201e5b5b", "589ce78d6cc20b7f20246f7f", "589cebc7e7671496201e5b6a", "589cefb46cc20b7f20246f8b", "58a314edb1b888703b11d633", "58a314eeb1b888703b11d634", "58a33592914817be15c84251", "58a338b27b731bfd525ca9f1", "58a33e05914817be15c84256", "58a33e62914817be15c84258", "58a341307b731bfd525ca9f6", "58a34bda914817be15c8425a", "58a34e65914817be15c8425c", "58a3559a914817be15c84260", "58a3722a206d7f3473b231df", "58ab21d383c705100b0b4063", "58b337cd155330f91bb9de81", "58b33cd11f7407201cfb8453", "58b33d9c1f7407201cfb8455", "58b351401f7407201cfb846d", "58bd8eab03fbd0f93b7f3743", "58bd90dd03fbd0f93b7f3747", "58bd918f03fbd0f93b7f374b", "58bd924038c2799f46880ca8", "58bd932b03fbd0f93b7f374f", "58bd93c303fbd0f93b7f3752", "58bd993a03fbd0f93b7f3759", "58c1665ab5f062f2214b0dda", "58c1665ab5f062f2214b0ddc", "58c2c0d6c89748e72a9be551", "58c2c710c89748e72a9be556", "58c6b42253240db53bbe142b", "58c6b78653240db53bbe142d", "58c6b7ec53240db53bbe142f", "58cbeeaf7ffd8b481278818b", "58cbf7487ffd8b4812788194", "58cbf8562596bdfd11a42d21", "58cbf9df7ffd8b4812788197", "58cbfb262596bdfd11a42d25", "58d1468f6a14bc8e5f7dc8c5", "58d53f43d2a1442459c362b9", "58d5441be1e3e5ba5f0278cf", "58d5465ed2a1442459c362d4", "58d5469de1e3e5ba5f0278d3", "58e2b37a25c1b94c29d38807", "58e2b8af25c1b94c29d3880c", "58e3ad76716a6b5a0553aa5e", "58e3b2fe47fb64ea0418238d", "58e3b418716a6b5a0553aa64", "58e3b513716a6b5a0553aa66", "58ebb894626d6599778fb9e6", "58ebb9ec626d6599778fb9eb", "58eda31ef8b0be985c459c56", "58ee5f295434cb14568dc6ff", "58ee800d5434cb14568dc704", "58ef86765434cb14568dc73a", "58ef8d9ce2ec33ab55d8b232", "58f814271f0f2a531a5ee923", "58f8c1051f0f2a531a5ee93b", "58f8c8701f0f2a531a5ee944", "58f8cac11f0f2a531a5ee949", "58f8d167cac563842fd74f8f", "58f8d19f91c030d02faaf5dc", "58f8d306cac563842fd74f93", "58f8d345cac563842fd74f95", "58f8d376cac563842fd74f97", "58ffa55a51862b056e9caad9", "58ffa55b51862b056e9caae0", "58ffa55b51862b056e9caae1", "58ffa55b51862b056e9caae4", "58ffa55b51862b056e9caae5", "5900bb602eae7eb3133d6966", "5900bda4a23e68b11402f93d", "5900cc85a23e68b11402f94c", "5900cd412eae7eb3133d6971", "59014ca3313995c36db7c675", "590206812057df824cdcbd71", "5902071b2057df824cdcbd72", "590210bfd080557b51cf2ac8", "59021328d080557b51cf2acc", "59021a662057df824cdcbd8b", "59021b2cd080557b51cf2ad6", "590b6ff5ffe3ef9574774bd9", "590b7376ffe3ef9574774bdc", "590b75b5a7c5939b7d712858", "5916186ceb9a301b191edb07", "59161b7feb9a301b191edb0c", "5919ee0e76ab48df4520f6ca", "5919f114eb9a301b191edb48", "591f0350c8d6163664825df6", "591f04b3c8d6163664825df9", "591f0565efd21a28790086eb", "591f09598235a491792c2079", "591f0a1aefd21a28790086f4", "591f0bbe8235a491792c207c", "5925c0b6b529ddaf6251ac11", "5925c6f2cb37dc4662bd3ab1", "5930b5c2b79a25c861492ca2", "5930b6cbba3c046d6241eb30", "5930b98ab79a25c861492caa", "593712bcd9a230816d347051", "59371775dc5816246ddbdc24", "593afb073b051909655a26c1", "593b01b488a43f297b3b7501", "593b042a88a43f297b3b7503", "593b065988a43f297b3b7509", "593b12ab0a6bf2927b71bf01", "593ef781f3c1b4dd3a9cbc0f", "59418c026131e46817983daf", "594824e62bd266750edf8d74", "59482588e25048290e189428", "59482a7c2bd266750edf8d7c", "59482b57e25048290e189433", "59482e9937802cbb3d64ac6b", "594c78e237802cbb3d64acd1", "595125209f4db28c68ce06a6", "59512b0a3fcc51236804b8f0", "59555dbdb878af696d535534", "595e8461cca5586a525a07b3", "595e8e20cca5586a525a07d0", "595e8eae26c18fc850a11ede", "5960d26f9f2de9c62e800509", "5961934e0b05bd122fd525dd", "596195720b05bd122fd525e3", "596196c19f2de9c62e800520", "59660b31132ba85a0a3df51d", "596d04d3132ba85a0a3df55f", "59760ed39f9ae7c264c57740", "59760ff6e33449c266b8584d", "5976108c9f9ae7c264c57742", "5978eb12e33449c266b858aa", "5978f05be33449c266b858af", "5984a993e33449c266b85940", "5984b282ee5fbbbd43b86540", "5984b46ae33449c266b85968", "598cdee389b4d3243553d2ac", "598ce005d48411b844a3261d", "598ce40cd48411b844a32623", "599c742da02d87a45565fb09", "599c7446a02d87a45565fb0b", "59a862fc13998bd318ead209", "59a87c5d633ec93e5896c6c9", "59b05482ec1393b81671f7d6", "59b0562eec1393b81671f7dc", "59b05880ec1393b81671f7e8", "59b7f5323ca369e83f0df34c", "59b7f6843ca369e83f0df356", "59b7fb493ca369e83f0df36a", "59bad10f1833d26505649155", "59bad8ce1833d2650564915f", "59c12d9491d781a352a18989", "59c3f3a64d81bd112ee937c8", "59c3f5364d81bd112ee937d1", "59c95d134d81bd112ee93907", "59d3ca0d4d81bd112ee93b2d", "59d6890c7205c3e65a3273dd", "59d689e25bc0ba495bc0538e", "59d68a665bc0ba495bc05392", "59d68e727205c3e65a3273ef", "59dfc144665fdc0f1bf07544", "59dfc506665fdc0f1bf07582", "59ea53d7ea3d9bbd5d7f64ea", "59ea5c77ea3d9bbd5d7f6520", "59ef8ce99c4c872c55fc2133", "59ef8dccf7deb3be551338fd", "59f0ba041b32c685591be3c4", "59f0bb70a158f1245a00c395", "59f38a08cac3c9cb654a1a55", "59f38f4da4b1303b66644fe2", "59fb3ba8062524a824e0a48c", "59fb40b18c3b0b232416951e", "5a00a3cd666e228951fba4e6", "5a00cab97a70691a74319322", "5a00cccc3964ee9474fe679a", "5a03bd79cdb7fec33eb81448", "5a03be0ecdb7fec33eb8144a", "5a03c23dcdb7fec33eb81454", "5a04995dcdb7fec33eb814d8", "5a049a33d30565553ef64666", "5a049b8ecdb7fec33eb814de", "5a049daad30565553ef6466e", "5a09dcb51323195c5d8c0fd1", "5a0a60801323195c5d8c1041", "5a0cede97bfe699178173c44", "5a0dda997bfe699178173cef", "5a0ddeb8b6026c7778f664ba", "5a0de145b6026c7778f664c4", "5a133f25180d8caa0de1d7c3", "5a133f25180d8caa0de1d7c4", "5a13890a180d8caa0de1d7ca", "5a138bea180d8caa0de1d7d8", "5a146962180d8caa0de1d809", "5a15d6d81ce8925d58bc5de0", "5a15d8821ce8925d58bc5df4", "5a15d9881ce8925d58bc5dfa", "5a15dcc48e8e8f2959a2969b", "5a15ddf41ce8925d58bc5e05", "5a15e11a1ce8925d58bc5e09", "5a16fe051ce8925d58bc5e75", "5a170e2dc132c8f67eb9730e", "5a170f8c1ce8925d58bc5ec1", "5a171255c132c8f67eb97312", "5a1713adc132c8f67eb97318", "5a1d7ae91ef631b47000902b", "5a20736cb82ef6f51c6ba66f", "5a25bf3e09fff6871deb99aa", "5a25c11b09fff6871deb99b4", "5a299371e541d464630f35ca", "5a2ae5f1d726f4242357fa48", "5a2ae691709124352c6c5df2", "5a2ae6c0d726f4242357fa4c", "5a2ae763709124352c6c5df4", "5a30296066479b5a3e24344d", "5a303266909dca503e16fbf3", "5a314f07ad12c8460c1da48f", "5a342a7a13b5f69139b43288", "5a342d3f2e1fdb303aa4f119", "5a342deb2e1fdb303aa4f11b", "5a398cd91beb069a0c6d19dc", "5a398e5a46d53d1c0ed71833", "5a3be81a1db8b46c2a39ac2f", 
                        "5a3be8f71db8b46c2a39ac32", "5a4e7d601ac536773c782fcb", "5a4e93591db8b46c2a39ad2e", "5a4e94441ac536773c7830b0", "5a4fcc9e1db8b46c2a39adcc", "5a4fcd061db8b46c2a39add0", "5a56655f1db8b46c2a39ae66", "5a56685e1ac536773c783260", "5a59032e1ac536773c7832d6", "5a5904235ea24d7464e3ac94", "5a59053e5ea24d7464e3ac98", "5a5906e41ac536773c7832de", "5a6663da3eaf230d695d3184", "5a675a2cb1554cfc6d35b70a", "5a675d3a3eaf230d695d31da", "5a73468d801a80d60d2f6174"]
        var featureVec = new Array(features.length).fill(0);
        var phenotypes = patient.phenotypes // [ "ffdsfsvsdf", 'fsdvsdf', 'sdfsf' ]  -> [ 0, 1, 0, 1, 1]
        for (var p in phenotypes) {
            var idx = features.indexOf(phenotypes[p]) // Should have used a library to vectorize since input is not sorted
            if (idx != -1) {
                featureVec[idx] = 1
            }
        }

        var data = {
            "Inputs": {
                "features": {
                    "ColumnNames": ["Column 0"].concat(features),
                    "Values": [featureVec, ]
                }
            },
            "GlobalParameters": {}
        }

        return callback(data);
    }

}